var mocks = [];
var schemas = require('../schemas/schemas');

var tagNames = ['Shopping Cart', 'Cart', 'Device', 'Floor', 'FloorSpace', 'Light', 'Bulb', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Ground', 'Ceiling',
    'Roof', 'Tile', 'Clear', 'Soft', 'Office', 'Building', 'Outside', 'Inside', 'Door', 'Window', 'Mobile', 'Phone', 'Tablet', 'Desktop'];

var ControllersByOrgID = {
	name: 'ControllersByOrgID',
	mockRoute: '\/api\/v1\/controllers\/organization-id\/\\d+$',
	testScope: 'success',
	testScenario: 'multipleResults',
	jsonTemplate: [{

		singleResult: function () {
			var result = [];
			result.push(schemas.controller);
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
				result.push(JSON.parse(JSON.stringify(schemas.controller)));
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
                };
                result[i].building_ID = schemas.wellKnown.buildingId;
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
mocks.push(ControllersByOrgID);

var SaveControllersByOrgID = {
	name: 'SaveControllersByOrgID',
	mockRoute: '\/api\/v1\/controllers\/with-assignments',
	testScope: 'success',
	testScenario: 'saveResult',
	method: 'PUT',
	jsonTemplate: [{

		saveResult: function () {
			var result = [];
			result.push(schemas.controller);
			return JSON.stringify({
				result: result,
				count: 1
			});
		}
	}]

};
mocks.push(SaveControllersByOrgID);

var DeleteControllersByOrgID = {
	name: 'DeleteControllersByOrgID',
	mockRoute: '\/api\/v1\/controllers\/organization-id\/\\d+$',
	testScope: 'success',
	testScenario: 'deleteResult',
	method: 'DELETE',
	jsonTemplate: [{

		deleteResult: function () {
			var result = [];
			result.push(schemas.controller);
			return JSON.stringify({
				result: result,
				count: 1
			});
		}
	}]

};
mocks.push(DeleteControllersByOrgID);

var ConnectionStringByController = {
	name: 'ConnectionStringByContoller',
	mockRoute: '\/api\/v1\/controllers\/connectionstring\/device-id\/\\d+\/organization-id\/\\d+$',
	testScope: 'success',
	testScenario: 'singleResult',
	jsonTemplate: [{

		singleResult: function () {
			var result = [];
			result.push(schemas.connectionString);
			return JSON.stringify({
				result: result,
				count: 1
			});
		}

	}]

};
mocks.push(ConnectionStringByController);


exports.mocks = mocks;
