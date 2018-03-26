var mocks = [];
var schemas = require('../schemas/schemas');

var GetCodebook = {
    name: 'GetCodebook',
    mockRoute: '\/api\/codeBook', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result:[
                        schemas.codebook,
                        schemas.codebook,
                        schemas.codebook
                    ],
                    count: 3
                });
            }
        }
    ]
};
mocks.push(GetCodebook);

var GetCodeBooks = {
    name: 'GetCodeBooks',
    mockRoute: '\/api\/codeBook', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result:[
                        schemas.codebook,
                        schemas.codebook,
                        schemas.codebook
                    ],
                    count: 3
                });
            }
        }
    ]
};
mocks.push(GetCodeBooks);

var SaveCodebook = {
    name: 'SaveCodebook',
    mockRoute: '\/api\/codeBook', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    method:'PUT',
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result:[
                        schemas.codebook
                    ],
                    count: 1
                });
            }
        }
    ]
};
mocks.push(SaveCodebook);

var DeleteCodebook = {
    name: 'DeleteCodebook',
    mockRoute: '\/api\/codeBook\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'noContent', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    method:'DELETE',
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return "";
            }
        }
    ]
};
mocks.push(DeleteCodebook);

exports.mocks = mocks;