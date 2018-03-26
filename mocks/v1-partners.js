
/**
* Created by djf03 on 7/26/2017.
*/
var mocks = [];
var schemas = require('../schemas/schemas');

var getPartnersEnv = {
    name: 'GetPartnersEnv',
    mockRoute: '\/api\/v1\/partners\/entities-and-environments', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multiplePartnersMultipleEnvironment',  //change this to one of the scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            singlePartnerSingleEnvironment: function () {
                var count = 1;
                var result = [
                    {
                        "partnerID": 1,
                        "partnerName": "Default Partner",
                        "partnerKey" : "0a9322d7-8998-4040-8ba6-7d2440a3fe4e",
                        "environments": [
                            {
                                "environmentID": 1,
                                "environmentName": "ASP_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    }
                ];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            singlePartnerMultipleEnvironments: function() {
                var count = 1;
                var result = [
                    {
                        "partnerID": 1,
                        "partnerName": "Default Partner",
                        "environments": [
                            {
                                "environmentID": 1,
                                "environmentName": "ASP_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 2,
                                "environmentName": "ASP_QA_US",
                                "entityKey": "PRT-f9598d98-3eb5-44d0-9dd7-3b8dcb29160e",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 3,
                                "environmentName": "ASP_PROD_US",
                                "entityKey": "PRT-9124a3ef-1377-484b-9331-cc88c861ba4e",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    }
                ];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            singlePartnerNoEnvironments: function() {
                var count = 1;
                var result = [
                    {
                        "partnerID": 1,
                        "partnerName": "Default Partner",
                        "environments": []
                    }
                ];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            multiplePartnersSingleEnvironment: function() {
                var count = 3;
                var result = [
                    {
                        "partnerID": 1,
                        "partnerName": "Default Partner",
                        "environments": [
                            {
                                "environmentID": 1,
                                "environmentName": "DEF_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    },
                    {
                        "partnerID": 2,
                        "partnerName": "ABC Partner",
                        "environments": [
                            {
                                "environmentID": 12,
                                "environmentName": "ASP_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    },
                    {
                        "partnerID": 3,
                        "partnerName": "Test Partner",
                        "environments": [
                            {
                                "environmentID": 123,
                                "environmentName": "TEST_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    }
                ];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            multiplePartnersMultipleEnvironment: function() {
                var count = 3;
                var result = [
                    {
                        "partnerID": 1,
                        "partnerName": "Default Partner",
                        "partnerKey" : "0a9322d7-8998-4040-8ba6-7d2440a3fe4e",
                        "environments": [
                            {
                                "environmentID": 1,
                                "environmentName": "gggDEF_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 123,
                                "environmentName": "aaaDEF_QA_US",
                                "entityKey": "PRT-f9598d98-3eb5-44d0-9dd7-3b8dcb29160e",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 13,
                                "environmentName": "cccASP_PROD_US",
                                "entityKey": "PRT-9124a3ef-1377-484b-9331-cc88c861ba4e",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    },
                    {
                        "partnerID": 2,
                        "partnerName": "ABC Partner",
                        "partnerKey" : "564564567-8998-4040-8ba6-7d2440a3fe4e",
                        "environments": [
                            {
                                "environmentID": 1423,
                                "environmentName": "ASP_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 1234,
                                "environmentName": "ABC_QA_US",
                                "entityKey": "PRT-f9598d98-3eb5-44d0-9dd7-3b8dcb29160e",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 13,
                                "environmentName": "ASP_PROD_US",
                                "entityKey": "PRT-9124a3ef-1377-484b-9331-cc88c861ba4e",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    },
                    {
                        "partnerID": 3,
                        "partnerName": "Test Partner",
                        "partnerKey" : "asdadfg-8998-4040-8ba6-7d2440a3fe4e",
                        "environments": [
                            {
                                "environmentID": 1,
                                "environmentName": "TEST_DEV_US",
                                "entityKey": "PRT-7e957fcf-ddb5-420f-b267-4866cf300c19",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 31,
                                "environmentName": "TEST_QA_US",
                                "entityKey": "PRT-f9598d98-3eb5-44d0-9dd7-3b8dcb29160e",
                                "role_ID": schemas.currentRole
                            },
                            {
                                "environmentID": 31,
                                "environmentName": "ASP_PROD_US",
                                "entityKey": "PRT-9124a3ef-1377-484b-9331-cc88c861ba4e",
                                "role_ID": schemas.currentRole
                            }
                        ]
                    }
                ];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            multiplePartnersNoEnvironment: function() {
                var count = 3;
                var result = [
                    {
                        "partnerID": 1,
                        "partnerName": "Default Partner",
                        "environments": []
                    },
                    {
                        "partnerID": 2,
                        "partnerName": "ABC Partner",
                        "environments": []
                    },
                    {
                        "partnerID": 3,
                        "partnerName": "Test Partner",
                        "environments": []
                    }
                ];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            noPartnerNoEnvironment: function() {
                var count = 0;
                var result = [];
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        }
    ]
};

mocks.push(getPartnersEnv);

var GetPartnersWithOrgs = {
    name: 'GetPartnersWithOrgs',
    mockRoute: '\/api\/v1\/partners\/partners-with-organization', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var organizations = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    organizations.push(schemas.organizationWithAddressAndContact);
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.wellKnown.organizationWithAddressAndContact));
                wellKnown.organizationID = schemas.wellKnown.organization;
                organizations[0] = wellKnown;

                var result = {
                    "environments": [
                        { "key":"014f8a88-7efb-4b6b-879d-a3706e0f7b9a", "value":"env01" },
                        { "key":"96239671-eb18-463e-a0e3-737337c2ae5e", "value":"env02" }
                    ],
                    "partners": [
                        { "key":"b83ca228-0c10-46ad-b05a-61480bb642ad", "value":"Partner 1", "entityID": "654" },
                        { "key":"1381ee44-e951-4492-91ab-8027b0accfa3", "value":"Partner 2", "entityID": "654" }
                    ],
                    "organizations": organizations
                };

                return JSON.stringify(result);
            }
        }
    ]
};
mocks.push(GetPartnersWithOrgs);

var GetPartnersWithContact = {
    name: 'GetPartnersWithContact',
    mockRoute: '\/api\/v1\/partners\/with-contacts-and-roles',
    testScope: 'success',
    testScenario: 'multipleResults',
    latency: '500-3000',
    jsonTemplate: [
        {
            singleResult: function () {
                var result = [];
                schemas.partnersWithContacts[0] = schemas.wellKnown.partner;
                result.push(schemas.partnersWithContacts);
                return JSON.stringify({
                    result: result,
                    count: 1
                });
            }
        },
        {
            multipleResults: function () {
                // var result = [];
                // var count = 8;
                // for (var i = 0; i < count; i++) {
                //     result.push(schemas.partnersWithContacts);
                // }
                // result[0] = schemas.wellKnown.partner;
                // result[0].role_ID = null;
                // return JSON.stringify({
                //     result:result,
                //     count: count
                // });
                return JSON.stringify({
                    "result":[
                        {
                            "entityKey":"7e957fcf-ddb5-420f-b267-4866cf300c19",
                            "partnerID":1,
                            "partnerKey":"0a9322d7-8998-4040-8ba6-7d2440a3fe4e",
                            "name":"Default Partner - Correct ID",
                            "type":"Other",
                            "active":true,
                            "contacts":[
                                {
                                    "contactID":43,
                                    "partner_ID":"0a9322d7-8998-4040-8ba6-7d2440a3fe4e",
                                    "name":"Partner 1 - Index 0",
                                    "type":"Other",
                                    "address1":"string",
                                    "address2":"string",
                                    "address3":"string",
                                    "address4":"string",
                                    "locality":"string",
                                    "region":"string",
                                    "postalCode":"string",
                                    "country":"string",
                                    "email":"string",
                                    "phone":"string",
                                    "active":true
                                }
                            ],
                            "role_ID":36
                        },
                        {
                            "entityKey":"wrtjh356-ddb5-420f-b267-4866cf300c19",
                            "partnerID":1,
                            "partnerKey":"564564567-8998-4040-8ba6-7d2440a3fe4e",
                            "name":"Partner 2 - Index 1",
                            "type":"Other",
                            "active":true,
                            "contacts":[
                                {
                                    "contactID":43,
                                    "partner_ID":"0a9322d7-8998-4040-8ba6-7d2440a3fe4e",
                                    "name":"Default Partner - Correct ID",
                                    "type":"Other",
                                    "address1":"string",
                                    "address2":"string",
                                    "address3":"string",
                                    "address4":"string",
                                    "locality":"string",
                                    "region":"string",
                                    "postalCode":"string",
                                    "country":"string",
                                    "email":"string",
                                    "phone":"string",
                                    "active":true
                                }
                            ],
                            "role_ID":36
                        },
                        {
                            "entityKey":"nrt6789tdrt-ddb5-420f-b267-4866cf300c19",
                            "partnerID":1,
                            "partnerKey":"nr78dsdr-8998-4040-8ba6-7d2440a3fe4e",
                            "name":"Partner 3 - Non matching Key",
                            "type":"Other",
                            "active":true,
                            "contacts":[
                                {
                                    "contactID":43,
                                    "partner_ID":"0a9322d7-8998-4040-8ba6-7d2440a3fe4e",
                                    "name":"Default Partner - Correct ID",
                                    "type":"Other",
                                    "address1":"string",
                                    "address2":"string",
                                    "address3":"string",
                                    "address4":"string",
                                    "locality":"string",
                                    "region":"string",
                                    "postalCode":"string",
                                    "country":"string",
                                    "email":"string",
                                    "phone":"string",
                                    "active":true
                                }
                            ],
                            "role_ID":36
                        }
                    ],
                    "count":3
                });
            }
        },
        {
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
mocks.push(GetPartnersWithContact);


var SavePartnersWithContact = {
    name: 'SavePartnersWithContact',
    mockRoute: '\/api\/v1\/partners\/with-contacts',
    testScope: 'success',
    testScenario: 'saveResult',
    method: 'PUT',
    latency: '500-3000',
    jsonTemplate: [
        {
            saveResult: function () {
                var result = [];
                schemas.partnerID = schemas.wellKnown.partner;
                result.push(schemas.partnersWithContacts);
                return JSON.stringify({
                    result: result,
                    count: 1
                });
            }
        }]
};
mocks.push(SavePartnersWithContact);

var GetPartnerSharedSettings = {
    name: 'GetPartnerSharedSettings',
    mockRoute: '\/api\/v1\/shared-application-settings\/partner-id', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result: [
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting,
                        schemas.partnerAppSetting

                    ],
                    count: 10
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
mocks.push(GetPartnerSharedSettings);


var GetPartnerAPIKeys = {
    name: 'GetPartnerAPIKeys',
    mockRoute: '\/api\/v1\/api-keys\/partner-id', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
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
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey
                    ],
                    count: 10
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
mocks.push(GetPartnerAPIKeys);


var SavePartnerAPIKey = {
    name: 'SavePartnerAPIKey',
    mockRoute: '\/api\/v1\/api-keys', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'saveResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    method: 'PUT',
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            saveResult: function () {
                return JSON.stringify({
                    result: [
                        schemas.APIKey,
                        schemas.APIKey,
                        schemas.APIKey
                    ],
                    count: 1
                });
            }
        }
    ]
};
mocks.push(SavePartnerAPIKey);

var SavePartnerAssignment = {
    name: 'SavePartnerAssignment',
    mockRoute: '\/api\/v1\/partner-assignments', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'PUT',
    testScenario: 'saveResult', //change this to one of hte scenario names below and restart the mock server to get new data
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        saveResult: function() {
            return '{"result": [{"partnerAssignmentID": 1,"foreign_ID": "null","tableName": "string","role_ID": "null","roleName": "string","partner_ID": "null","partnerName": "string","effectiveFromUTCTimestamp": "null","effectiveToUTCTimestamp": "null","status": "string"}],"count": 0,"limit": "null","offset": "null"}';
        }
    }]
};
mocks.push(SavePartnerAssignment);


exports.mocks = mocks;
