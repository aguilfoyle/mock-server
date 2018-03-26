const   yaml    = require('js-yaml'),
	    fs      = require('fs');

const icons = yaml.safeLoad(fs.readFileSync('././icons.yml', 'utf8'));
var iconList = icons.icons.map(icon => ({name: icon.id, unicode: icon.unicode}));
var mocks = [];
var schemas = require('../schemas/schemas');

var tags = [{name: 'Shopping Cart', icon: 'shopping-cart'},
            {name: 'Beacon', icon: 'flask'},
            {name: 'Device', icon: 'tablet'},
            {name: 'Floor', icon: 'align-justify'},
            {name: 'FloorSpace', icon: 'align-center'},
            {name: 'Light', icon: 'bolt'},
            {name: 'Bulb', icon: 'lightbulb'},
            {name: 'Red', icon: 'registered'},
            {name: 'Bluetooth', icon: 'bluetooth-b'},
            {name: 'Green', icon: 'scanner-touchscreen'},
            {name: 'Yellow', icon: 'trello'},
            {name: 'Orange', icon: 'asterisk'},
            {name: 'Ground', icon: 'file-powerpoint'},
            {name: 'Ceiling', icon: 'utensils'}];

var GetTags = {
    name: 'GetTags',
    mockRoute: '\/api\/v1\/tags', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            singleResult: function () {
                var result = [];
                result.push(schemas.tag);
                result[0].name = tags[0].name;
                return JSON.stringify({
                    result: result,
                    count: 1
                });
            },

            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(JSON.parse(JSON.stringify(schemas.tag)));
                    if (i < tags.length) {
                        result[i].name = tags[i].name;
                        result[i].displayIcon.icon = `\\u${iconList[Math.floor(Math.random() * iconList.length)].unicode}`;
                        result[i].displayIcon.cssClass = tags[i].icon;
                    } else {
                        result[i].displayIcon.icon = `\\u${iconList[Math.floor(Math.random() * iconList.length)].unicode}`;
                        result[i].displayIcon.cssClass = iconList[Math.floor(Math.random() * iconList.length)].name;
                    }

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
                    result.push(JSON.parse(JSON.stringify(schemas.tag)));
                    if (i < tags.length) {
                        result[i].name = tags[i].name;
                        result[i].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                        result[i].displayIcon.class = tags[i].icon;
                    } else {
                        result[i].displayIcon.icon = iconList[Math.floor(Math.random() * iconList.length)].unicode;
                        result[i].displayIcon.class = iconList[Math.floor(Math.random() * iconList.length)].name;
                    }

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
mocks.push(GetTags);

// PUT - /api/v1/tags
var SaveTag = {
	name: 'SaveTag',
	mockRoute: '\/api\/v1\/tags',
	testScope: 'success',
	testScenario: 'saveResult',
	method: 'PUT',
	latency: '500-3000',
	jsonTemplate: [{
		saveResult: function() {
			return JSON.stringify({
				result: [schemas.tag],
				count: 1
			});
		}
	}]
};
mocks.push(SaveTag);

exports.mocks = mocks;