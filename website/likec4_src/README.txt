## Development work

Although the likeC4 diagrams are created by the deployment GH actions,
they are not be rebuilt automatically alongside the rest of the website when in development mode.

To develop these diagrams we recommend using the likeC4 docker container, which can be run with the following command from the `likec4_src` directory:
```
docker run --rm \
	-v $PWD:/data \
	--init \
	-t \
	-p 5173:5173 \
	-p 24678:24678 \
	-e CHOKIDAR_UPOLLING=1 \
	-e CHOKIDAR_INTERVAL=200 \
	likec4/likec4 start
```
The likeC4 interface can then be accessed at `http://localhost:5173/` and any changes to the source files will trigger a rebuild of the diagrams.

## Build commands

`npx likec4 codegen react --no-use-dot -o ../likec4_react/likec4.generated.js`

Note that `--no-use-dot` is needed for general containers which aren't the likec4 dedicated container.


## Index image generation

This uses a headless browser session, so the dependencies for playwright have to be installed first
`npx playwright install`
`npx playwright install-deps`

Then run the export command
`npx likec4 export png --no-use-dot`
Copy the index figure into the public images directory
`cp index.png ../public/images/likec4_index.png`
