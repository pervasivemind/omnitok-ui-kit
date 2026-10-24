import { createStorybookMcpHandler } from '@storybook/mcp';

interface Env {
  STORYBOOK_URL: string;
  STORYBOOK_BI_URL: string;
}

// The MCP serves the kit AND the BI components (bi-components and
// dashboard-render, published by the BI monorepo's Storybook). It reads the
// same manifest from both sites and merges the maps. A site that does not
// answer, or an id present in both, is an error: an agent must never get
// half the catalogue in silence.
const MAP_KEY: Record<string, 'components' | 'docs'> = {
  './manifests/components.json': 'components',
  './manifests/docs.json': 'docs',
};

function required(env: Env, name: keyof Env): string {
  const value = env[name];
  if (!value) throw new Error(`${name} is not set (wrangler.toml [vars])`);
  return value;
}

async function fetchManifest(base: string, path: string): Promise<Record<string, unknown>> {
  const url = `${base}/${path.replace('./', '')}`;
  // Re-thrown with the URL: workerd reports a refused connection as a bare
  // "internal error", which does not say which Storybook is down.
  const res = await fetch(url).catch((err: unknown) => {
    throw new Error(`Cannot reach ${url}: ${err instanceof Error ? err.message : String(err)}`);
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch manifest ${url}: ${res.status}`);
  }
  return res.json();
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const sources = [required(env, 'STORYBOOK_URL'), required(env, 'STORYBOOK_BI_URL')];
    const handler = await createStorybookMcpHandler({
      manifestProvider: async (_req, path) => {
        const key = MAP_KEY[path];
        if (!key) throw new Error(`Unknown manifest path ${path}`);
        const parts = await Promise.all(sources.map((base) => fetchManifest(base, path)));
        const merged: Record<string, unknown> = {};
        parts.forEach((part, i) => {
          if (part.v !== parts[0].v) {
            throw new Error(`Manifest versions differ for ${path}: ${sources[0]} has v${parts[0].v}, ${sources[i]} has v${part.v}`);
          }
          const entries = part[key];
          if (!entries || typeof entries !== 'object') {
            throw new Error(`${sources[i]}/${path} has no "${key}" map`);
          }
          for (const [id, entry] of Object.entries(entries)) {
            if (id in merged) throw new Error(`Id "${id}" is in more than one Storybook (${path})`);
            merged[id] = entry;
          }
        });
        return JSON.stringify({ v: parts[0].v, [key]: merged });
      },
    });
    return handler(request);
  },
};
