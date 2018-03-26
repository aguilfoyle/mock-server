/*****
 * Warning:
 * In order to run this test the server.js must be started
 * Given, this test modifies in-memory objects, it can only be ran once
 * Restart, of the server.js is needed in order to re-run this test
 */

//TODO: refactor this test to run without the need of staring/re-starting server.js

var request = require('request');


describe("Test Mock Scenario Types", function() {


    it("Test successful response for mock api/realtime using multiple templates and changing the test scenario in realtime", function(done){

        request('http://localhost:3000/api/floorSpace/withLightsmap/125', function(error, response, body){

            var data = JSON.parse(body);

            // should already be in mixed mode
            expect(response.statusCode).toEqual(200);
            expect(data.floorSpace.hasBLEBeacons).toEqual(true);
            expect(data.floorSpace.hasVLC).toEqual(true);

            var testData = {
                route: {
                    name: 'getFloorSpaceWithLightsmap',
                    scope: 'success',
                    scenario: 'mixedMode'
                },
                update: {
                    scenario: 'bleOnly'
                }
            };

            request.post({url: 'http://localhost:3000/mock/update', form: testData}, function(error, response, body){

                var data = JSON.parse(body);


                // now should be set to ble only
                expect(response.statusCode).toEqual(200);
                expect(data.body.route.name).toEqual(testData.route.name);
                expect(data.body.route.testScenario).toEqual(testData.update.scenario);

                request('http://localhost:3000/api/floorSpace/withLightsmap/125', function(error, response, body){

                    var data = JSON.parse(body);

                    // should return as ble only
                    expect(response.statusCode).toEqual(200);
                    expect(data.floorSpace.hasBLEBeacons).toEqual(true);
                    expect(data.floorSpace.hasVLC).toEqual(false);

                    done();

                });

            });

        });

    });

});
