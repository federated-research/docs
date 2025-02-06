# HDR UK Federated Analytics Documentation

To run locally: `npm run dev --prefix website`

To run locally using docker:
- `docker build -t fedadoc .`
- `docker run -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public fedadoc`

To access locally hosted webpages use the address `localhost:3000`.

To add/edit content, do so with Markdown files in `website/pages/...`
