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
    evalscript: 'CO',
    bbox: [13,45,15,47],
    fromUTC: '2019-04-01T00:00:00Z',
    toUTC: '2019-06-30T00:00:00Z',
    width: 512,
    height: 512
};

sentinelAPI.runProcess(options, (err, blob_image) => {
    
});

```

## [Evalscipts V3](https://docs.sentinel-hub.com/api/latest/evalscript/v3/)

- NO2      [Nitrogen Dioxide](http://www.tropomi.eu/data-products/nitrogen-dioxide)
- NO22     [Nitrogen Dioxide (NO2) script by Annamaria Luongo](https://custom-scripts.sentinel-hub.com/sentinel-5p/nitrogen_dioxide_tropospheric_column/)
- SO2      [Sulfur Dioxide](http://www.tropomi.eu/data-products/sulphur-dioxide)
- HCHO     [Formaldehyde](http://www.tropomi.eu/data-products/formaldehyde)
- O3       [Ozone](http://www.tropomi.eu/data-products/total-ozone-column)
- CH4      [Methane](http://www.tropomi.eu/data-products/methane)
- AS1      [UV (Ultraviolet) Aerosol Index calculated based on wavelengths of 340 nm and 380 nm](http://www.tropomi.eu/data-products/uv-aerosol-index)
- AS2      [UV (Ultraviolet) Aerosol Index calculated based on wavelengths of 354 nm and 388 nm](http://www.tropomi.eu/data-products/uv-aerosol-index)
- CLOUD1   [Cloud base height](http://www.tropomi.eu/data-products/carbon-monoxide)
- CLOUD2   [Cloud base pressure](http://www.tropomi.eu/data-products/carbon-monoxide)
- CLOUD3   [Cloud optical thickness](http://www.tropomi.eu/data-products/carbon-monoxide)
- CLOUD4   [Cloud top height](http://www.tropomi.eu/data-products/carbon-monoxide)
- CLOUD5   [Cloud top pressure](http://www.tropomi.eu/data-products/carbon-monoxide)
- CLOUD6   [Effective radiometric cloud fraction](http://www.tropomi.eu/data-products/carbon-monoxide)
- CO        (default) [CARBON Monoxide](http://www.tropomi.eu/data-products/carbon-monoxide)


