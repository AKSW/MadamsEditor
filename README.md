# Madams Editor

(yet simple) RML Editor based on [YARRRML](http://rml.io/yarrrml/) and [RocketRML](https://github.com/semantifyit/RocketRML). Demo available [here](http://rml.io/yarrrml/).

## Init, install packages

`docker-compose up install`

## Start development environment

`docker-compose up dev`

Access app at `http://localhost:1234` and RML mapping server at `http://localhost:3000`

## Create productive build

`docker-compose up build`

Will create files in `./dist/`

## Start productive

1) Create build
2) Make `./dist/index.html` public available
3) Run server with Docker `docker-compose up server` or directly with Node `node src/server.js`.