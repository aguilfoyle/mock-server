/**
 * Created by sxd15 on 8/23/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var siteWithAddressByOrganizationID = {
    name: 'siteWithAddressByOrganizationID',
    mockRoute: '\/api\/site\/withAddress\/organizationID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
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
    mockRoute: '\/api\/site\/withAddress', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'saveResult', //change this to one of hte scenario names below and restart the mock server to get new data
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
    mockRoute: '\/api\/siteAssignment\/siteID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResult', //change this to one of hte scenario names below and restart the mock server to get new data
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
            return '{"result":[{"firstName":"Super","lastName":"Admin","siteAssignmentID":97,"foreign_ID":2,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":6,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-15T00:00:00","effectiveToUTCTimestamp":"2016-12-24T00:00:00","status":"Expired"},{"firstName":"Read","lastName":"Only","siteAssignmentID":99,"foreign_ID":14,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"},{"firstName":"Frank","lastName":"Rolinson","siteAssignmentID":100,"foreign_ID":46,"tableName":"User","role_ID":1,"roleName":"ApplicationAccess","site_ID":9,"siteName":"DemoKit6","effectiveFromUTCTimestamp":"2016-12-13T00:00:00","effectiveToUTCTimestamp":"2017-01-27T00:00:00","status":"Expired"}],"count":3}';
        }
    }]
};
mocks.push(AssignedSitesBySiteID);

var KnownDevicesBySiteID = {
    name: 'KnownDevicesBySiteID',
    mockRoute: '/api/knownDevice/siteID/\\d+$',
    testScope: 'success',
    testScenario: 'multipleResult',
    jsonTemplate: [{
        multipleResult: function () {
            return '{"result":[{"knownDeviceID":62,"site_ID":6,"client_ID":"DBTest2","active":true,"userInfo":{"hello":"world","hello2":"world2"},"categories":[{"knownDeviceCategoryID":1,"organization_ID":1,"categoryName":"Baseball","active":true},{"knownDeviceCategoryID":2,"organization_ID":1,"categoryName":"Football","active":true}],"devices":[]},{"knownDeviceID":63,"site_ID":6,"client_ID":"MACValidation","active":true,"userInfo":{},"categories":[],"devices":[]},{"knownDeviceID":64,"site_ID":6,"client_ID":"NewDevice5","active":true,"userInfo":{"vasdf":"dfdf1"},"categories":[{"knownDeviceCategoryID":1,"organization_ID":1,"categoryName":"Baseball","active":true}],"devices":[]},{"knownDeviceID":82,"site_ID":6,"client_ID":"121344","active":true,"userInfo":{},"categories":[{"knownDeviceCategoryID":1,"organization_ID":1,"categoryName":"Baseball","active":true}],"devices":[]}],"count":4}';
        }
    }]

};
mocks.push(KnownDevicesBySiteID);

exports.mocks = mocks;
