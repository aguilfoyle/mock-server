/**
 * Created by sxd15 on 3/21/2017.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var GetFlatOrg = {
    name: 'GetFlatOrg',
    mockRoute: '\/api\/organization\/withAddressAndContact', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.organizationWithAddressAndContact);
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                result[0] = wellKnown;
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },

        {
            //you can use regular javascript to create objects to be served
            noResults: function () {
                var result = [];
                var count = 0;

                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(GetFlatOrg);

var GetDeploymentSettings = {
    name: 'GetDeploymentSettings',
    mockRoute: '\/api\/sharedApplicationSettings\/organizationID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'forbidden', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result:[
                        schemas.deploymentSetting,
                        schemas.deploymentSetting,
                        schemas.deploymentSetting
                    ],
                    count: 3
                });
            }
        },
        {
            noResults: function(){
                return JSON.stringify(schemas.noResults);
            }
        }
    ]
};
mocks.push(GetDeploymentSettings);

var GetAPIKeys = {
    name: 'GetAPIKeys',
    mockRoute: '\/api/APIKey\/organizationID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'forbidden', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result:[
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey
                    ],
                    count: 3
                });
            }
        },
        {
            noResults: function(){
                return JSON.stringify(schemas.noResults);
            }
        }
    ]
};
mocks.push(GetAPIKeys);

exports.mocks = mocks;
