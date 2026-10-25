import { createStorybookMcpHandler } from '@storybook/mcp';

interface Env {
  STORYBOOK_URL: string;
}

// The MCP serves the platform's one Storybook (tools/storybook in the BI
// monorepo): the kit at the commit the apps pin, its design guides and the
// BI components. A site that does not answer, or a manifest without its map,
// is an error: an agent must never get half the catalogue in silence.
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
  // "internal error", which does not say which site is down.
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
    const source = required(env, 'STORYBOOK_URL');
    const handler = await createStorybookMcpHandler({
      manifestProvider: async (_req, path) => {
        const key = MAP_KEY[path];
        if (!key) throw new Error(`Unknown manifest path ${path}`);
        const manifest = await fetchManifest(source, path);
        const entries = manifest[key];
        if (!entries || typeof entries !== 'object') {
          throw new Error(`${source}/${path} has no "${key}" map`);
        }
        return JSON.stringify(manifest);
      },
    });
    return handler(request);
  },
};
