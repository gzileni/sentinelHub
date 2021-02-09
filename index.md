# SENTINEL HUB
package to access sentinel open data by Sentinel HUB

## INSTALLATION

```
npm install --save sentinelhub
```
or
```
yarn install sentinelhub
```

## USAGE

### Get Authorization Token
You must create OAuth Client by [Sentinel HUB Dashboard](https://www.sentinel-hub.com/) 
```
const sentinelhub = require('sentinelhub');

sentinelHUB.getToken(clientID, clientSecret, (err, token) => {
    ....
});

```

### Get Blob Satellite's Image 

```
const sentinelhub = require('sentinelhub');

const options = {
    token: <YOUR OAUTH TOKEN>, 
    evalscript: <custom evalscript v3>,
    bbox: [13,45,15,47],
    fromUTC: '2019-04-01T00:00:00Z',
    toUTC: '2019-06-30T00:00:00Z',
    width: 512,
    height: 512
};

const tobase64 = false;

sentinelAPI.runProcess(options, (err, blob_image) => {
    if (err == null) {
        blob_image.arrayBuffer().then((buf) => {
          if (tobase64) {
            return Buffer.from(buf).toString('base64');
          } else {
            return Buffer.from(buf);
          }
        });
    } else {
        console.error(err)
    }
});

```


