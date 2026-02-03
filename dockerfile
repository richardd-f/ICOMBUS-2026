# -------- Stage 1: Build --------
FROM node:20-slim AS builder

WORKDIR /app

# 4. Install Dependencies (With Cache)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm i --frozen-lockfile

# 5. Copy Source Code & Build
COPY . .
RUN pnpm build


# -------- Stage 2: Runtime --------
FROM node:20-slim AS runner
WORKDIR /app

# Copy artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node" , "server.js"]