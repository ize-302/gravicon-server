# base image
FROM oven/bun:latest

# set workdir
WORKDIR /app

## copy files
COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install

# copy source code
COPY src src
COPY tsconfig.json tsconfig.json

ENV PORT=8000
EXPOSE 8000

CMD ["bun", "start:dev"]