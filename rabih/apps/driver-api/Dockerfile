FROM node:22.10.0-alpine AS build
WORKDIR /app
COPY ./package.json ./package-lock.json ./decorate-angular-cli.js ./nx.json ./tsconfig.base.json ./
RUN npm i --force
COPY ./apps/driver-api ./apps/driver-api
COPY ./libs/database ./libs/database
RUN npx nx build driver-api --prod

FROM node:22.10.0-alpine
WORKDIR /app
COPY --from=build /app/dist/apps/driver-api/package.json ./
RUN npm i --force
RUN npm i mysql
RUN npm install core-js
COPY --from=build /app/dist/apps/driver-api ./
EXPOSE 3002
CMD ["node", "main.js"]