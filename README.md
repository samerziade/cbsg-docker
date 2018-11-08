# Dockerfile for CBSG

This [`Dockerfile`](Dockerfile) will download, build, and start an HTTP server to run the [Corporate Bullshit Generator](https://sourceforge.net/projects/cbsg/) source code.

The server will run on port `80` and you can then expose the port however you like.

## Build

```bash
docker build -t cbsg .
```

## Run

```bash
docker run -p 8080:80 -d cbsg
```