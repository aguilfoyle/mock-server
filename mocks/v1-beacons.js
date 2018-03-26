var mocks = [];
var schemas = require('../schemas/schemas');

var tagNames = ['Shopping Cart', 'Cart', 'Device', 'Floor', 'FloorSpace', 'Light', 'Bulb', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Ground', 'Ceiling',
    'Roof', 'Tile', 'Clear', 'Soft', 'Office', 'Building', 'Outside', 'Inside', 'Door', 'Window', 'Mobile', 'Phone', 'Tablet', 'Desktop'];

var BeaconsByOrgID = {
    name: 'BeaconsByOrgID',
    mockRoute: '\/api\/v1\/beacons\/organization-id\/\\d+$',
    testScope: 'success',
    testScenario: 'multipleResults',
    jsonTemplate: [{

        singleResult: function () {
            var result = [];
            result.push(schemas.beacon);
            result[0].categories[0].categoryName = tagNames[0];
            return JSON.stringify({
                result: result,
                count: 1
            });
        },

        multipleResults: function () {
            var result = [];
            var count = 30;
            var tagList = tagNames;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.beacon)));
                var index = Math.floor( Math.random() * tagList.length );
                var tags = tagList.splice( index, Math.floor( Math.random() * tagList.length ) );
                if (tags.length > 0) {
                    result[i].categories[0].categoryName = tags;
                    result[i].categories[0].name = tags[0];
                } else {
                    result[i].categories[0].categoryName = tagList[index];
                    result[i].categories[0].name = tagList[index];
                }
                result[i].categories[0].displayIcon = {
                    "cssClass": "shopping-cart",
                    "icon": "\\uf1e7"
                }
                tagList = tagNames;
            }
            return JSON.stringify({
                result: result,
                count: count
            });
        },

        noResults: function(){
            return JSON.stringify(schemas.noResults);
        }
    }]

};
mocks.push(BeaconsByOrgID);

var SaveBeaconsByOrgID = {
    name: 'SaveBeaconsByOrgID',
    mockRoute: '\/api\/v1\/beacons\/with-assignments',
    testScope: 'success',
    testScenario: 'saveResult',
    method: 'PUT',
    jsonTemplate: [{

        saveResult: function () {
            var result = [];
            result.push(schemas.beacon);
            return JSON.stringify({
                result: result,
                count: 1
            });
        }
    }]

};
mocks.push(SaveBeaconsByOrgID);

var DeleteBeaconsByOrgID = {
    name: 'DeleteControllersByOrgID',
    mockRoute: '\/api\/v1\/beacons\/organization-id\/\\d+$',
    testScope: 'success',
    testScenario: 'deleteResult',
    method: 'DELETE',
    jsonTemplate: [{

        deleteResult: function () {
            var result = [];
            result.push(schemas.beacon);
            return JSON.stringify({
                result: result,
                count: 1
            });
        }
    }]

};
mocks.push(DeleteBeaconsByOrgID);


exports.mocks = mocks;
