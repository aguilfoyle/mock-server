/**
 * Created by sxd15 on 3/21/2017.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

// api/siteAssignment/userID/{userID}
var application = {
    name: 'application',
    mockRoute: '\/api\/v1\/applications', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        singleResult: function() {
            return JSON.stringify({
                "result": [
                    {
                        "applicationID": 1,
                        "applicationName": "Gordon---3-DEV",
                        "description": "IPS commissioning and maintenance iOS app"
                    },
                    {
                        "applicationID": 47,
                        "applicationName": "IPS_AdminTool",
                        "description": "Admin and API application for IPS"
                    },
                    {
                        "applicationID": 48,
                        "applicationName": "IPSEngineering-DEV",
                        "description": "IPS Engineering iOS app"
                    },
                    {
                        "applicationID": 49,
                        "applicationName": "Acuity Brands Commissioner-DEV",
                        "description": "Acuity Brands Commissioning iOS app"
                    },
                    {
                        "applicationID": 50,
                        "applicationName": "IPSAnalytics",
                        "description": "IPS Analytics"
                    },
                    {
                        "applicationID": 74,
                        "applicationName": "IPS_AdminTool_FLR01",
                        "description": "Test version of IPS_AdminTool"
                    },
                    {
                        "applicationID": 77,
                        "applicationName": "TestApp1",
                        "description": "Testing app creation 1"
                    },
                    {
                        "applicationID": 79,
                        "applicationName": "PUTTest2",
                        "description": "Troubleshooting Target 2.0 issue"
                    },
                    {
                        "applicationID": 80,
                        "applicationName": "PUTTest3",
                        "description": "Troubleshooting Target issue still."
                    },
                    {
                        "applicationID": 81,
                        "applicationName": "RBAC SuperUser PUT Test 1",
                        "description": "Testing requirement of SuperUser RBAC for save."
                    },
                    {
                        "applicationID": 82,
                        "applicationName": "Test 5FLR",
                        "description": "Test 5 flro1"
                    },
                    {
                        "applicationID": 83,
                        "applicationName": "Test 5FLR",
                        "description": "Test 5 flro1"
                    },
                    {
                        "applicationID": 86,
                        "applicationName": "SuperUser TJ1",
                        "description": "Testing for bug fix"
                    }
                ],
                "count": 13
            });
        }
    }]
};
mocks.push(application);

exports.mocks = mocks;
