const yaml = require('js-yaml'),
    fs = require('fs');

const icons = yaml.safeLoad(fs.readFileSync('././icons.yml', 'utf8'));
var iconList = icons.icons.map(icon => ({name: icon.id, unicode: icon.unicode}));
var mocks = [];
var schemas = require('../schemas/schemas');

///known-device/site-id/1?device-type=beacon
var GetBeacons = {
    name: 'GetBeacons',
    mockRoute: '\/api\/v2\/known-devices\/site-id\/\\d+$',
    testScope: 'success',
    testScenario: 'multipleResults',
    latency: '500-3000',
    jsonTemplate: [
        {
            singleResult: function () {
                var result = [];
                result.push(schemas.assetBeacon);
                result[0].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                result[0].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                result[0].tags[0].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                result[0].tags[0].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                result[0].tags[1].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                result[0].tags[1].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;

                return JSON.stringify({
                    result: result,
                    count: 1
                });
            },

            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.assetBeacon)));
                    result[i].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                    result[i].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                    result[i].tags[0].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                    result[i].tags[0].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                    result[i].tags[1].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                    result[i].tags[1].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                }
                return JSON.stringify({
                    result: result,
                    count: count
                });
            },

            manyResults: function () {
                var result = [];
                var count = 1000;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.assetBeacon)));
                    result[i].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                    result[i].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                    result[i].tags[0].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                    result[i].tags[0].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                    result[i].tags[1].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                    result[i].tags[1].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                }
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
        }
    ]
};
mocks.push(GetBeacons);

// PUT - /api/v1/tags
var SaveBeacon = {
    name: 'SaveBeacon',
    mockRoute: '\/api\/v2\/known-devices',
    testScope: 'success',
    testScenario: 'saveResult',
    method: 'PUT',
    latency: '500-3000',
    jsonTemplate: [{
        saveResult: function () {
            var result = [];
            result.push(schemas.assetBeacon);
            result[0].icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
            result[0].tags[0].icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
            result[0].tags[1].icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
            return JSON.stringify({
                result: result,
                count: 1
            });
        }
    }]
};
mocks.push(SaveBeacon);

//DELETE - /api/v2/known-devices/{knownDeviceID}
var DeleteBeacon = {
	name: 'DeleteBeacon',
	mockRoute: '\/api\/v2\/known-devices\/\\d+$',
	testScope: 'success',
	testScenario: 'deleteResult',
	method: 'DELETE',
	jsonTemplate: [{

		deleteResult: function () {
			var result = [];
			result.push(schemas.knownDeviceBySiteID);
			return JSON.stringify({
				result: result,
				count: 1
			});
		}
	}]

};
mocks.push(DeleteBeacon);

exports.mocks = mocks;