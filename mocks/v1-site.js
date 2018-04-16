/**
 * Created by sxd15 on 8/23/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var tagNames = ['Shopping Cart', 'Cart', 'Device', 'Floor', 'FloorSpace', 'Light', 'Bulb', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Ground', 'Ceiling',
    'Roof', 'Tile', 'Clear', 'Soft', 'Office', 'Building', 'Outside', 'Inside', 'Door', 'Window', 'Mobile', 'Phone', 'Tablet', 'Desktop'];

var siteWithAddressByOrganizationID = {
    name: 'siteWithAddressByOrganizationID',
    mockRoute: '\/api\/v1\/sites\/organization-id\/.*\/with-addresses', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        multipleResults: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(schemas.site);
            }
            var wellKnown = JSON.parse(JSON.stringify(schemas.site));
            wellKnown.siteID = schemas.wellKnown.site.siteID;
            wellKnown.organization_ID = schemas.wellKnown.site.organization_ID;
            wellKnown.organizationName = schemas.wellKnown.site.organizationName;
            wellKnown.siteName = schemas.wellKnown.site.siteName;
            wellKnown.businessAddress_ID = schemas.wellKnown.site.businessAddress_ID;
            wellKnown.address1 = schemas.wellKnown.site.address1;
            wellKnown.city = schemas.wellKnown.site.city;
            wellKnown.stateProvince = schemas.wellKnown.site.stateProvince;
            wellKnown.postalCode = schemas.wellKnown.site.postalCode;
            wellKnown.country = schemas.wellKnown.site.country;
            result[0] = wellKnown;
            return JSON.stringify({
                result:result,
                count: count
            });
        }
    },
        {
            noResults: function(){
                return JSON.stringify(schemas.noResults);
            }
        }]
};
mocks.push(siteWithAddressByOrganizationID);


// PUT - api/site/withAddress
var SaveSite = {
    name: 'SaveSite',
    mockRoute: '\/api\/v1\/sites\/with-addresses', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'saveResult', //change this to one of hte scenario names below and restart the mock server to get new data
    errorBody: '{"msg":"Cannot Insert Duplicate Key","requestId":"4060e3c2-3b55-4bfe-9527-7e0b70896ce1","code":"BadRequest"}',
    method: 'PUT',
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        saveResult: function() {
            var result = {
                "result": [
                    {
                        "siteID": 1547,
                        "organization_ID": 1,
                        "organizationName": null,
                        "siteName": "Another New Site",
                        "businessAddress_ID": 687,
                        "address1": "123 Test Site Lane",
                        "address2": "",
                        "city": "Montgomery",
                        "stateProvince": "AL",
                        "postalCode": "36117",
                        "country": "USA",
                        "serviceLevel_ID": null,
                        "serviceStatus": "INACTIVE",
                        "timezoneID": 1230,
                        "fromGeometri": false,
                        "active": true,
                        "lumicastConfigTag": "CONFIG_TAG",
                        "swCornerLatitude": null,
                        "swCornerLongitude": null,
                        "neCornerLatitude": null,
                        "neCornerLongitude": null,
                        "centroidLatitude": null,
                        "centroidLongitude": null,
                        "role_ID": 36,
                        "networkAnalystURL": null
                    }
                ],
                "count": 1
            };
            return JSON.stringify(result);
        }
    }]
};

mocks.push(SaveSite);


var AssignedSitesBySiteID = {
    name: 'AssignedSitesBySiteID',
    mockRoute: '\/api\/v1\/site-assignments\/site-id\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResult', //change this to one of hte scenario names below and restart the mock server to get new data
	latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        singleResult: function() {
            var sites = {
                result: [
                    schemas.siteAssignment
                ],
                count: 1
            };
            return JSON.stringify(sites);
        },

        multipleResult: function () {
            return '{"result":[{"firstName":"Super","lastName":"Admin","siteAssignmentID":97,"foreign_ID":2,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":6,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-15T00:00:00","effectiveToUTCTimestamp":"2016-12-24T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Frank","lastName":"Rolinson","siteAssignmentID":100,"foreign_ID":46,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"}],"count":20}';
        },

	    noResults: function(){
		    return JSON.stringify(schemas.noResults);
	    }
    }]
};
mocks.push(AssignedSitesBySiteID);

exports.mocks = mocks;

var KnownDevicesBySiteID = {
    name: 'KnownDevicesBySiteID',
    mockRoute: '\/api\/v1\/known-devices\/site-id',
    testScope: 'success',
    testScenario: 'multipleResults',
    jsonTemplate: [{

    	singleResult: function () {
		    var result = [];
		    result.push(schemas.knownDeviceBySiteID);
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
			    result.push(JSON.parse(JSON.stringify(schemas.knownDeviceBySiteID)));
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
mocks.push(KnownDevicesBySiteID);


var SaveKnownDevicesBySiteID = {
    name: 'SaveKnownDevicesBySiteID',
    mockRoute: '\/api\/v1\/known-devices',
    testScope: 'success',
    testScenario: 'saveResult',
    method: 'PUT',
    jsonTemplate: [{

	    saveResult: function () {
		    var result = [];
		    result.push(schemas.knownDeviceBySiteID);
		    return JSON.stringify({
			    result: result,
			    count: 1
		    });
	    }
    }]

};
mocks.push(SaveKnownDevicesBySiteID);


var DeleteKnownDevicesBySiteID = {
    name: 'DeleteKnownDevicesBySiteID',
    mockRoute: '\/api\/v1\/known-devices',
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
mocks.push(DeleteKnownDevicesBySiteID);


var SaveSiteAssignment = {
    name: 'SaveSiteAssignment',
    mockRoute: '\/api\/v1\/site-assignments', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'PUT',
    testScenario: 'saveResult', //change this to one of hte scenario names below and restart the mock server to get new data
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        saveResult: function() {
            var sites = {
                result: [
                    schemas.siteAssignment
                ],
                count: 1
            };
            return JSON.stringify(sites);
        }
    }]
};
mocks.push(SaveSiteAssignment);


var DeleteSiteAssignment = {
    name: 'DeleteSiteAssignment',
    mockRoute: '\/api\/v1\/site-assignments', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'DELETE',
    testScenario: 'deleteResult', //change this to one of hte scenario names below and restart the mock server to get new data
    jsonTemplate: [{
        deleteResult: function() {
            var sites = {
                result: [
                    schemas.siteAssignment
                ],
                count: 1
            };
            return JSON.stringify(sites);
        }
    }]
};
mocks.push(DeleteSiteAssignment);

var GetAllSites = {
  name: 'GetAllSites',
  mockRoute: '\/api\/v1\/navigator-configurations\/sites\/with-floor-space-summaries',
  testScope: 'success',
  testScenario: 'singleResult',
  jsonTemplate: [{

    singleResult: function () {
      var result = [];
      result.push(schemas.blsPMDSiteList);
      return JSON.stringify({
        result: result,
        count: 1
      });
    },

    multipleResults: function () {
      var result = [];
      var count = 10;
      for (var i = 0; i < count; i++) {
        result.push(schemas.blsPMDSiteList);
        result[0].id = schemas.wellKnown.blsPMD.id;
        result.push(schemas.trueSite);
      }
      return JSON.stringify({
        result:result,
        count: count
      });
    },

    noResults: function(){
      return JSON.stringify(schemas.noResults);
    }
  }]

};
mocks.push(GetAllSites);

var GetSite = {
  name: 'GetSite',
  mockRoute: '\/api\/v1\/navigator-configurations\/device-id\/.*\/site-name\/BLS%20-%20PMD',
  testScope: 'success',
  testScenario: 'singleResult',
  jsonTemplate: [{

    singleResult: function () {
      return JSON.stringify(schemas.blsPMDSite);
    },

    noResults: function(){
      return JSON.stringify(schemas.noResults);
    }
  }]

};
mocks.push(GetSite);

var GetSiteByBeacon = {
  name: 'GetSiteByBeacon',
  mockRoute: '\/api\/v1\/navigator-configurations\/device-id\/.*\/beacon-ids',
  testScope: 'success',
  testScenario: 'singleResult',
  jsonTemplate: [{

    singleResult: function () {
      return JSON.stringify(schemas.blsPMDSiteByBeacon);
    },

    noResults: function(){
      return JSON.stringify(schemas.noResults);
    }
  }]

};
mocks.push(GetSiteByBeacon);

var GetLiveMapBySite = {
  name: 'GetLiveMapBySite',
  mockRoute: '\/api\/v1\/insights\/positions\/site-id\/.*\/live-map',
  testScope: 'success',
  testScenario: 'singleResult',
  jsonTemplate: [{

    singleResult: function () {
      var result = [];
//      result.push(schemas.blsPMDSiteLiveMap);
      return JSON.stringify({
        result: result,
        count: 0
      });
    },

    noResults: function(){
      return JSON.stringify(schemas.noResults);
    }
  }]

};
mocks.push(GetLiveMapBySite);

exports.mocks = mocks;
