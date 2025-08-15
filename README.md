# Federated Research Documentation

This repository contains documentation for Federated Research.

## Developer

To run locally: `npm run dev --prefix website`

To run locally using docker:
- `docker build -t fedadoc .`
- `docker run -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public fedadoc`
or:
- `docker run -d -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public --cidfile fedadoc_id.txt fedadoc`
and to shutdown the container afterwards:
- `docker container stop $(cat fedadoc_id.txt) && rm fedadoc_id.txt`

To access locally hosted webpages use the address `localhost:3000`.

To add/edit content, do so with Markdown files in `website/pages/...`
