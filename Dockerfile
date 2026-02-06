# Multi-stage build for Omnitok UI Kit Storybook

# Stage 1: Build Storybook
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY turbo.json ./

# Copy all packages and apps
COPY packages/ packages/
COPY apps/ apps/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build core package first
RUN cd packages/core && pnpm build

# Build Storybook
RUN cd apps/storybook && pnpm build

# Stage 2: Serve Storybook with nginx
FROM nginx:alpine

# Copy built Storybook from builder (output está en /app/storybook-static)
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
