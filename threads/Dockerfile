FROM node:lts-alpine

WORKDIR /app

COPY . .

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm
RUN pnpm i -g typescript
RUN pnpm i
RUN tsc

EXPOSE 8001

CMD ["pnpm", "run", "start"]


