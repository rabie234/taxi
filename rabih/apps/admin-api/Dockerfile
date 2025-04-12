# === Build Stage ===
FROM node:22.10.0-alpine AS build

WORKDIR /app

# Copy base files
COPY package.json package-lock.json decorate-angular-cli.js nx.json tsconfig.base.json ./

# Install dependencies
RUN npm install --force

# Copy only required source code
COPY apps/admin-api apps/admin-api
COPY libs/database libs/database

# Run Nx build
RUN npx nx build admin-api --configuration=production

# === Run Stage ===
FROM node:22.10.0-alpine

WORKDIR /app

# Copy built output and minimal dependencies
COPY --from=build /app/dist/apps/admin-api ./
COPY --from=build /app/package.json ./

# Install only production deps
RUN npm install --only=production --force

# (Optional) install extra dependencies
RUN npm install mysql core-js --force

EXPOSE 3000
CMD ["node", "main.js"]
