
var log = require('logbootstrap');

var axios = require('axios');
var qs = require('qs');

const FormData = require('form-data');
const fetch = require('node-fetch');

var dotenv = require('dotenv');
dotenv.config();

// ----------------------------------------------------------------------------------------------------------
// Requesting tokens
async function getToken (clientID, clientSecret, callback) {

    var client_id = clientID;
    var client_secret = clientSecret;

    const instance = axios.create({
        baseURL: 'https://services.sentinel-hub.com'
    });
    
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };

    const body = qs.stringify({
      client_id,
      client_secret,
      grant_type: "client_credentials"
    });

    await instance.post("/oauth/token", body, config).then(resp => {
        log('info', 'get token OK.');
        callback(null, resp.data.access_token);
    }).catch(err => {
        log('error', 'Error TOKEN -> ' + JSON.stringify(err))
        callback(err, '');
    })
};

let _getRequest = (options) => {

    var request = {
        input: { 
            bounds: {
                properties: {
                    crs: "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                },
                bbox: options.bbox
            },
            data: [
                {
                    type: "S5PL2",
                    dataFilter: {
                        timeRange: {
                            from: options.fromUTC,
                            to: options.toUTC
                        }
                    }
                }
            ]
        },
        output: {
            width: options.width,
            height: options.height
        }
    };

    return JSON.stringify(request);

}

// Get Image
let runProcess = (options, callback) => {

    let request = _getRequest(options);
    log('info', 'REQUEST \n' + request);

    const body = new FormData;
    body.append('request', request);
    body.append("evalscript", options.evalscript);

    var headers = {
        "Authorization": "Bearer " + options.token,
        'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
        "Accept-Encoding": "gzip, deflate, br",
        "Accept": "*/*",
        "Connection": "keep-alive"
    };

    var requestOptions = {
        method: 'POST',
        body: body,
        redirect: 'follow',
        headers: headers
    };
        
    fetch("https://creodias.sentinel-hub.com/api/v1/process", requestOptions)
    .then(response => response.blob())
    .then(result => callback(null, result))
    .catch(error => callback(error, null));

};

module.exports = {
    getToken,
    runProcess
}