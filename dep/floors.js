/**
 * Created by AXH12 on 10/20/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var GetFloormapToken = {
    name: 'GetFloormapToken',
    mockRoute: '\/api\/floorMapToken\/siteID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {

            singleResult: function () {
                var result = [];
                schemas.floorMapToken.building_ID = schemas.wellKnown.buildingId;
                schemas.floorMapToken.floorID = schemas.wellKnown.floorId;
                result.push(schemas.floorMapToken);
                return JSON.stringify({
                    result: result,
                    count: 1
                });
            },

            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.floorMapToken);
                }
                var items = [];
                items.push(JSON.parse(JSON.stringify(result[0])));
                items.push(JSON.parse(JSON.stringify(result[1])));
                items.push(JSON.parse(JSON.stringify(result[2])));
                items[0].building_ID = schemas.wellKnown.buildingId;
                items[0].floorID = schemas.wellKnown.floorId;
                items[1].building_ID = schemas.wellKnown.buildingId;
                items[2].building_ID = schemas.wellKnown.buildingId;
                result[0] = items[0];
                result[1] = items[1];
                result[2] = items[2];
                return JSON.stringify({
                    result: result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(GetFloormapToken);

exports.mocks = mocks;
