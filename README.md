# electron-publisher-simple-http

Simple http publisher provider for electron

## Installation:

`npm i --save-dev electron-publisher-simple-http`

## Not final version - see issue:

https://github.com/electron-userland/electron-builder/issues/3261

## Usage:

### Sample configuration ( package.json ):

```json
{
  "build": {
    "appId": "someappid",
    "productName": "Some app",
    "publish": [
      {
        "provider": "generic",
        "url": "https://server.domain:8080/${name}/${os}/${arch}/"
      },
      "simple-http"
    ]
  },
  "build-simple-http": {
    "path": "/${name}/${os}/${arch}/",
    "hostname": "server.domain",
    "protocol": "https",
    "port": 8080,
    "method": "POST",
    "connectionOptions": {
      "rejectUnauthorized": false
    },
    "headers": {
      "X-Custom-Header": "header content"
    }
  }
}
```

### Default configuration:

```json
{
  "path": "/${name}/${os}/${arch}/",
  "hostname": "localhost",
  "protocol": "http",
  "port": 80,
  "//": "or 443 if protocol is set to https",
  "method": "POST",
  "connectionOptions": {},
  "headers": {}
}
```

## Simple server implementation:

https://github.com/zalewskip123/electron-publisher-simple-http-server
