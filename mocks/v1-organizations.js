/**
 * Created by sxd15 on 3/21/2017.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var GetFlatOrg = {
    name: 'GetFlatOrg',
    mockRoute: '\/api\/v1\/organizations\/with-addresses', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result: [
                        schemas.organizationWithAddressAndContact
                    ],
                    count: 1
                });
            }
        },
        {
            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.organizationWithAddressAndContact);
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
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
            multipleResultsDifferentRoles: function () {
                var roleIDs = ['33', '35', '36', '37', '45'];
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.organizationWithAddressAndContact)));
                    result[i].role_ID = roleIDs[Math.floor(Math.random() * roleIDs.length)];
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
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
            multipleResultsPartnerAdmin: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.organizationWithAddressAndContact)));
                    result[i].role_ID = 45;
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
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
            multipleResultsReadOnlyRole: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.organizationWithAddressAndContact)));
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                wellKnown.role_ID = 37;
                result[0] = wellKnown;
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            //you can use regular javascript to create objects to be served
            multipleResultsCommissionerRole: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.organizationWithAddressAndContact)));
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                wellKnown.role_ID = 33;
                result[0] = wellKnown;
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            //you can use regular javascript to create objects to be served
            multipleResultsAdminRole: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.organizationWithAddressAndContact)));
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                wellKnown.role_ID = 35;
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

var SaveOrg = {
    name: 'SaveOrg',
    mockRoute: '\/api\/v1\/organizations\/with-addresses', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'PUT',
    testScenario: 'saveResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            saveResult: function () {
                var result = [];
                var count = 1;
                result.push(schemas.organizationWithAddressAndContact);
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                result[0] = wellKnown;
                return JSON.stringify({
                    result: result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(SaveOrg);


var DeactivateOrg = {
    name: 'DeactivateOrg',
    mockRoute: '\/api\/v1/organizations\/1\/deactivate\/', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'PUT',
    testScenario: 'saveResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            saveResult: function () {
                var result = [];
                var count = 1;
                result.push(schemas.organizationWithAddressAndContact);
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                result[0] = wellKnown;
                return JSON.stringify({
                    result: result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(DeactivateOrg);

var GetDeploymentSettings = {
    name: 'GetDeploymentSettings',
    mockRoute: '\/api\/v1\/shared-application-settings\/organization-id', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result: [
                        schemas.deploymentSetting,
                        schemas.deploymentSetting,
                        schemas.deploymentSetting
                    ],
                    count: 3
                });
            }
        },
        {
            noResults: function () {
                return JSON.stringify(schemas.noResults);
            }
        }
    ]
};
mocks.push(GetDeploymentSettings);

var GetAPIKeys = {
    name: 'GetAPIKeys',
    mockRoute: '\/api\/v1\/api-keys\/organization-id', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result: [
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey
                    ],
                    count: 3
                });
            }
        },
        {
            noResults: function () {
                return JSON.stringify(schemas.noResults);
            }
        }
    ]
};
mocks.push(GetAPIKeys);

var SaveSharedApplicationSettings = {
    name: 'SaveSharedApplicationSettings',
    mockRoute: '\/api\/v1\/shared-application-settings',//a regex for the route, ex. '\/api\/steps\/.*\/uspartner-assignmentsers' is a valid route
    testScope: 'success',//success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'saveResult',
    method: 'PUT',
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            saveResult: function () {
                return '{"result":[{"applicationSettingID": 0,"applicationName": "string","settingKey": "string","settingValue": "string","organization_ID": null}]}';
            }
        }
    ]

};
mocks.push(SaveSharedApplicationSettings);



exports.mocks = mocks;
