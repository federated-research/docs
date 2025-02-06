
FROM node:22-alpine

RUN apk update && apk add bash

WORKDIR /app

COPY website/package*.json .
COPY website/theme.config.tsx .
COPY website/next.config.mjs .

RUN npm install

EXPOSE 8080 3000

CMD ["npm", "run", "dev"]