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

var pizza = {
    name: 'pizza',
    mockRoute: '\/api\/v1\/order\/.*', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'allDeliveredSomeAlerts', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served


        noResult: function() {
            return JSON.stringify({
                "result": [

                ]
            });
        },
        noOrderProcessingSomeAlerts: function () {
            var result = [];
            var count = 50;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 40 && i <= 44){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 45){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noScheduledSomeAlerts: function () {
            var result = [];
            var count = 45;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Producing";
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 40){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noProducingSomeAlerts: function () {
            var result = [];
            var count = 45;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 40){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noAwaitingShipmentSomeAlerts: function () {
            var result = [];
            var count = 45;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Producing";
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 40){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noShippedSomeAlerts: function () {
            var result = [];
            var count = 45;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Producing";
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 40){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noDeliveredSomeAlerts: function () {
            var result = [];
            var count = 45;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Producing";
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 40){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noOrderProcessingNoAlerts: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noScheduledNoAlerts: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noProducingNoAlerts: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noAwaitingShipmentNoAlerts: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noShippedNoAlerts: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noDeliveredNoAlerts: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allOrderProcessing: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Order Processing";
            }
            return JSON.stringify({
                result: result
            });
        },
        allScheduledNoAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Scheduled";
                result[i].alerts = [];
            }
            return JSON.stringify({
                result: result
            });
        },
        allScheduledAllAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Scheduled";
            }
            return JSON.stringify({
                result: result
            });
        },
        allScheduedSomeAlerts: function () {
            var result = [];
            var count = 10;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allProducingNoAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Producing";
                result[i].alerts = [];
            }
            return JSON.stringify({
                result: result
            });
        },
        allProducingAllAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Producing";
            }
            return JSON.stringify({
                result: result
            });
        },
        allProducingSomeAlerts: function () {
            var result = [];
            var count = 10;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Producing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allAwaitingShipmentNoAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Shipping";
                result[i].alerts = [];
            }
            return JSON.stringify({
                result: result
            });
        },
        allAwaitingShipmentAllAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Shipping";
            }
            return JSON.stringify({
                result: result
            });
        },
        allAwaitingShipmentSomeAlerts: function () {
            var result = [];
            var count = 10;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allShippeddNoAlerts: function () {
            var result = [];
            var count = 1;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Delivery";
                result[i].alerts = [];
            }
            return JSON.stringify({
                result: result
            });
        },
        allShippedAllAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Delivery";
            }
            return JSON.stringify({
                result: result
            });
        },
        allShippedSomeAlerts: function () {
            var result = [];
            var count = 10;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allDeliveredNoAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Delivered";
                result[i].alerts = [];
            }
            return JSON.stringify({
                result: result
            });
        },
        allDeliveredAllAlerts: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                result[i].bucketType = "Delivered";
            }
            return JSON.stringify({
                result: result
            });
        },
        allDeliveredSomeAlerts: function () {
            var result = [];
            var count = 10;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allBucketsSomeAlerts: function () {
            var result = [];
            var count = 55;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Producing";
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Shipping";
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivery";
                }
                if(i >= 40 && i <= 44){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 45 && i <= 49){
                    result[i].bucketType = "Delivered";
                }
                if(i >= 50){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allBucketsNoAlerts: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 25){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        noneShippedNoneDelivered: function () {
            var result = [];
            var count = 20;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        someShippedNoneDelivered: function () {
            var result = [];
            var count = 25;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 20){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        someShippedSomeDelivered: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 25){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allShippedNoneDelivered: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allShippedSomeDelivered: function () {
            var result = [];
            var count = 10;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 5){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allShippedAllDelivered: function () {
            var result = [];
            var count = 5;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
        allBucketsAllAlerts: function () {
            var result = [];
            var count = 55;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].lineNum = i;
                if(i >= 0 && i <= 4){
                    result[i].bucketType = "Order Processing";
                    result[i].alerts = [
                        {
                            "alertType": "2001.1"
                        },
                        {
                            "alertType": "2001.2"
                        },
                        {
                            "alertType": "2002"
                        },
                        {
                            "alertType": "2004"
                        },
                        {
                            "alertType": "2005"
                        },
                        {
                            "alertType": "9999"
                        }
                    ];
                }
                if(i >= 5 && i <= 9){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [
                        {
                            "alertType": "2001.1"
                        },
                        {
                            "alertType": "2001.2"
                        },
                        {
                            "alertType": "2002"
                        },
                        {
                            "alertType": "2004"
                        },
                        {
                            "alertType": "2005"
                        },
                        {
                            "alertType": "9999"
                        }
                    ];
                }
                if(i >= 10 && i <= 14){
                    result[i].bucketType = "Scheduled";
                    result[i].alerts = [];
                }
                if(i >= 15 && i <= 19){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [
                        {
                            "alertType": "2001.1"
                        },
                        {
                            "alertType": "2001.2"
                        },
                        {
                            "alertType": "2002"
                        },
                        {
                            "alertType": "2004"
                        },
                        {
                            "alertType": "2005"
                        },
                        {
                            "alertType": "9999"
                        }
                    ];
                }
                if(i >= 20 && i <= 24){
                    result[i].bucketType = "Producing";
                    result[i].alerts = [];
                }
                if(i >= 25 && i <= 29){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [
                        {
                            "alertType": "2001.1"
                        },
                        {
                            "alertType": "2001.2"
                        },
                        {
                            "alertType": "2002"
                        },
                        {
                            "alertType": "2004"
                        },
                        {
                            "alertType": "2005"
                        },
                        {
                            "alertType": "9999"
                        }
                    ];
                }
                if(i >= 30 && i <= 34){
                    result[i].bucketType = "Shipping";
                    result[i].alerts = [];
                }
                if(i >= 35 && i <= 39){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [
                        {
                            "alertType": "2001.1"
                        },
                        {
                            "alertType": "2001.2"
                        },
                        {
                            "alertType": "2002"
                        },
                        {
                            "alertType": "2004"
                        },
                        {
                            "alertType": "2005"
                        },
                        {
                            "alertType": "9999"
                        }
                    ];
                }
                if(i >= 40 && i <= 44){
                    result[i].bucketType = "Delivery";
                    result[i].alerts = [];
                }
                if(i >= 45 && i <= 49){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [
                        {
                            "alertType": "2001.1"
                        },
                        {
                            "alertType": "2001.2"
                        },
                        {
                            "alertType": "2002"
                        },
                        {
                            "alertType": "2004"
                        },
                        {
                            "alertType": "2005"
                        },
                        {
                            "alertType": "9999"
                        }
                    ];
                }
                if(i >= 50){
                    result[i].bucketType = "Delivered";
                    result[i].alerts = [];
                }
            }
            return JSON.stringify({
                result: result
            });
        },
    }]
};
mocks.push(pizza);

exports.mocks = mocks;
