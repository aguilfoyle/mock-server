/**
 * Created by AXH12 on 10/25/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');


var GetKnownDeviceCategory = {
    name: 'ThisIsATest',
    mockRoute: '\/api\/v1\/thisisatest\/.*', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    "result": [
                        schemas.knownDeviceCategory,
                        schemas.knownDeviceCategory,
                        schemas.knownDeviceCategory,
                        schemas.knownDeviceCategory,
                        schemas.knownDeviceCategory],
                    "count": 5
                });
            }
        }
    ]
};

mocks.push(GetKnownDeviceCategory);

exports.mocks = mocks;
