# Federated Research Documentation

This repository contains documentation for Federated Research, visit the [documentation website](https://docs.federated-analytics.ac.uk/) to see it.

## Developer

To run locally:

```bash
npm i --prefix website
```

then,

```bash
npm run dev --prefix website
```

---

To run locally using Docker:

- `docker build -t fedadoc .`
- `docker run -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public fedadoc`
  or:
- `docker run -d -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public --cidfile fedadoc_id.txt fedadoc`
  and to shutdown the container afterwards:
- `docker container stop $(cat fedadoc_id.txt) && rm fedadoc_id.txt`

To access locally hosted webpages use the address `localhost:3000`.

To add/edit content, do so with Markdown files in `website/pages/...`

---

To run with Github Codespaces:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=federated-research/docs)
