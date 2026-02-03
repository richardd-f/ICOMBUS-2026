# -------- Stage 1: Build --------
FROM node:20-slim AS builder

# 1. Install pnpm manually since node-slim doesn't have it
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# 2. Copy only files needed for install to maximize cache
COPY pnpm-lock.yaml package.json ./

# 3. Install Dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm i --frozen-lockfile

# 4. Copy Source Code & Build
COPY . .
RUN pnpm build


# -------- Stage 2: Runtime --------
FROM node:20-slim AS runner
WORKDIR /app

# 5. Set Environment to Production
ENV NODE_ENV=production

# Copy artifacts from standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]