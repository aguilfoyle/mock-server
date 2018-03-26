/**
 * Created by AXH12 on 10/20/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');


var siteBuildings = {
    name: 'siteBuildings',
    mockRoute: '\/api\/v1\/buildings\/site-id\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{

        singleResultWithLegacyHourOfOperationFormat: function () {
            var result = [];
            var building = schemas.building;
            building.buildingID = schemas.wellKnown.buildingId;
            building.hoursOfOperation = JSON.stringify(schemas.hoursOfOperationLegacy);
            result.push(building);
            return JSON.stringify({
                result: result,
                count: 1
            });
        },

        singleResultWithLegacyHourOfOperationFormatAsString: function () {
            var result = [];
            var building = schemas.building;
            building.buildingID = schemas.wellKnown.buildingId;
            building.hoursOfOperation = schemas.hoursOfOperationLegacy;
            result.push(building);
            return JSON.stringify({
                result: result,
                count: 1
            });
        },

        singleResultWithNewHourOfOperationFormat: function () {
            var result = [];
            var building = schemas.building;
            building.buildingID = schemas.wellKnown.buildingId;
            building.hoursOfOperation = schemas.hoursOfOperationNew;
            result.push(building);
            return JSON.stringify({
                result: result,
                count: 1
            });
        },

        singleResultWithNewHourOfOperationFormatAsString: function () {
            var result = [];
            var building = schemas.building;
            building.buildingID = schemas.wellKnown.buildingId;
            building.hoursOfOperation = JSON.stringify(schemas.hoursOfOperationNew);
            result.push(building);
            return JSON.stringify({
                result: result,
                count: 1
            });
        },

        singleResultWithoutHours: function () {
            var result = [];
            schemas.building.buildingID = schemas.wellKnown.buildingId;
            result.push(schemas.buildingWithoutHours);
            return JSON.stringify({
                result: result,
                count: 1
            });
        },

        //or you can use a built in templatiung engine to quickly generate random data
        multipleResults: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(schemas.building);
            }
            var item = JSON.parse(JSON.stringify(result[0]));
            item.buildingID = schemas.wellKnown.buildingId;
            result[0] = item;
            return JSON.stringify({
                result: result,
                count: count
            });
        },

        noResults: function () {
            return JSON.stringify({
                result: [],
                count: 0
            });
        }

    }]
};

mocks.push(siteBuildings);


var deactivateBuilding = {
    name: 'deactivateBuilding',
    mockRoute: '\/api\/v1\/buildings\/.*\/deactivate\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    method: "PUT",
    jsonTemplate: [{
        //or you can use a built in templatiung engine to quickly generate random data
        multipleResults: function () {
            return "";
        }
    }]
};
mocks.push(deactivateBuilding);

var getBuildings = {
    name: 'getBuildings',
    mockRoute: '\/api\/v1\/buildings\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    method: 'GET',
    jsonTemplate: [{
        singleResult: function() {
            return JSON.stringify({
                result: [schemas.buildings],
                count: 1
            });
        }
    }]
};
mocks.push(getBuildings);

var SaveBuilding = {
    name: 'SaveBuilding',
    mockRoute: '\/api\/v1\/buildings/', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    method: 'PUT',
    jsonTemplate: [{
        //or you can use a built in templatiung engine to quickly generate random data
        multipleResults: function () {
            return JSON.stringify({
                result: [schemas.building],
                count: 1
            });
        }
    }]
};
mocks.push(SaveBuilding);

exports.mocks = mocks;
