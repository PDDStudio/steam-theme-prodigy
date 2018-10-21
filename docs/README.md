# About the Theme Documentation

## Building the Documentation

The documentation is generated using [mkdocs](https://mkdocs.org/).

## Setup

Install the requirements (requires pip):

```sh
pip install -r docs/requirements.txt
```

## Dev/Live Server

While writing documentation it's quite handy to get a 'sneak-peek' of how the final site would look like.
Fortunately `mkdocs` has hot-reload support out of the box:

```sh
mkdocs serve
```

You can view the generated documentation at [localhost:8000](http://127.0.0.1:8000)

## Production Builds

To generate the final static documentation run:

```sh
mkdocs build --clean
```

The bundled output is placed into `docs/build/`
