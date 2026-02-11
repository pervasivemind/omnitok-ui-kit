import { createStorybookMcpHandler } from '@storybook/mcp';

interface Env {
  STORYBOOK_URL: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const handler = await createStorybookMcpHandler({
      manifestProvider: async (_req, path) => {
        const url = `${env.STORYBOOK_URL}/${path.replace('./', '')}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch manifest: ${res.status}`);
        }
        return res.text();
      },
    });
    return handler(request);
  },
};
