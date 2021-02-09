# SENTINEL HUB
package to access sentinel open data by Sentinel HUB

## INSTALLATION

```
npm install --save sentinelHUB
```
or
```
yarn install sentinelHUB
```

## USAGE

### Get Authorization Token
You must create OAuth Client by [Sentinel HUB Dashboard](https://www.sentinel-hub.com/) 
```
const sentinelHUB = require('sentinelHUB');

sentinelHUB.getToken(clientID, clientSecret, (err, token) => {
    ....
});

```

### Get Blob Satellite's Image 

```
const sentinelHUB = require('sentinelHUB');

const options = {
    clientID: <YOUR CLIENT ID>, 
    clientSecret: <YOUR CLIENT SECRET>,
    evalscript: <custom evalscript v3>,
    bbox: [13,45,15,47],
    fromUTC: '2019-04-01T00:00:00Z',
    toUTC: '2019-06-30T00:00:00Z',
    width: 512,
    height: 512
};

sentinelAPI.runProcess(options, (err, blob_image) => {
    
});

```


