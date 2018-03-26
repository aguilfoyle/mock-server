/**
 * Created by sxd15 on 8/23/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var GetUsersByOrganization = {
    name: 'GetUsersByOrganization',
    mockRoute: '\/api\/v1\/users\/organization-id\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.user);
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.user));
                wellKnown.userID = schemas.wellKnown.user;
                result[0] = wellKnown;
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(GetUsersByOrganization);


var SiteAssignmentsByUser = {
    name: 'SiteAssignmentsByUser',
    mockRoute: '\/api\/v1\/site-assignments\/user-id\/\\d+$',  //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',//change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
	        singleResult: function () {
		        var result = [];
		        result.push(schemas.siteAssignmentByUser);
		        return JSON.stringify({
			        result: result,
			        count: 1
		        });
	        },

            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.siteAssignmentByUser);
                }
                var wellKnown = JSON.parse(JSON.stringify(schemas.siteAssignmentByUser));
                wellKnown.user = schemas.wellKnown.user;
                result[0] = wellKnown;
                return JSON.stringify({
                    result:result,
                    count: count
                });
            }
        },
        {
            noResults: function () {
                return '{"result": [{}],"count": 0}';
            }
        }
    ]

};
mocks.push(SiteAssignmentsByUser);

var OrgAssignmentsByUser = {
    name: 'OrgAssignmentsByUser',
    mockRoute: '\/api\/v1\/org-assignments\/user-id\/\\d+$',//a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',//change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            multipleResults: function () {
                return '{"result":[{"orgAssignmentID":255,"foreign_ID":1,"organizationName":"testName","tableName":"User","roleName":"ApplicationAccess","role_ID":35,"org_ID":65,"allSites":false,"effectiveFromUTCTimestamp":"2017-07-04T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"}],"count":1}';

            }
        },
        {
            noResults: function () {
                return '{"result": [{}],"count": 0}';
            }
        }
    ]

};
mocks.push(OrgAssignmentsByUser);

var SaveOrgAssignment = {
    name: 'SaveOrgAssignment',
    mockRoute: '\/api\/v1\/org-assignments',//a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'saveResult',//change this to one of hte scenario names below and restart the mock server to get new data
    method: 'PUT',
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            saveResult: function () {
                return '{"result":[{"orgAssignmentID":255,"foreign_ID":1,"organizationName":"testName","tableName":"User","roleName":"ApplicationAccess","role_ID":35,"org_ID":65,"allSites":false,"effectiveFromUTCTimestamp":"2017-07-04T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"}],"count":1}';

            }
        }
    ]

};
mocks.push(SaveOrgAssignment);

var GroupAssignmentsByUser = {
    name: 'GroupAssignmentsByUser',
    mockRoute: '\/api\/v1\/site-group-assignments\/user-id\/.*\/with-names',//a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success',//success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',//change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            multipleResults: function () {
                return '{"result":[{"siteGroupAssignmentID":13,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":1,"roleName":"ApplicationAccess","siteGroup_ID":6,"siteGroupName":"test","status":"Expired","effectiveFromUTCTimestamp":"2016-12-06T00:00:00","effectiveToUTCTimestamp":"2016-12-31T00:00:00"},{"siteGroupAssignmentID":12,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":4,"roleName":"Commissioner","siteGroup_ID":5,"siteGroupName":"testName","status":"Active","effectiveFromUTCTimestamp":null,"effectiveToUTCTimestamp":null},{"siteGroupAssignmentID":4,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":4,"roleName":"Commissioner","siteGroup_ID":7,"siteGroupName":"testName","status":"Expired","effectiveFromUTCTimestamp":"2016-08-15T20:54:00","effectiveToUTCTimestamp":"2016-09-30T23:59:59.999"},{"siteGroupAssignmentID":69,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":37,"roleName":"ReadOnly","siteGroup_ID":23,"siteGroupName":"South","status":"Expired","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"},{"siteGroupAssignmentID":70,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":37,"roleName":"ReadOnly","siteGroup_ID":24,"siteGroupName":"North Region","status":"Expired","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"}],"count":5}';
            }
        },
        {
            noResults: function () {
                return '{"result": [{}],"count": 0}';
            }
        }
    ]

};
mocks.push(GroupAssignmentsByUser);


var SaveGroupAssignment = {
    name: 'SaveGroupAssignment',
    mockRoute: '\/api\/v1\/site-group-assignments',//a regex for the route, ex. '\/api\/steps\/.*\/uspartner-assignmentsers' is a valid route
    testScope: 'success',//success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'saveResult',
    method: 'PUT',
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            saveResult: function () {
                return '{"result":[{"siteGroupAssignmentID":13,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":1,"roleName":"ApplicationAccess","siteGroup_ID":6,"siteGroupName":"test","status":"Expired","effectiveFromUTCTimestamp":"2016-12-06T00:00:00","effectiveToUTCTimestamp":"2016-12-31T00:00:00"},{"siteGroupAssignmentID":12,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":4,"roleName":"Commissioner","siteGroup_ID":5,"siteGroupName":"testName","status":"Active","effectiveFromUTCTimestamp":null,"effectiveToUTCTimestamp":null},{"siteGroupAssignmentID":4,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":4,"roleName":"Commissioner","siteGroup_ID":7,"siteGroupName":"testName","status":"Expired","effectiveFromUTCTimestamp":"2016-08-15T20:54:00","effectiveToUTCTimestamp":"2016-09-30T23:59:59.999"},{"siteGroupAssignmentID":69,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":37,"roleName":"ReadOnly","siteGroup_ID":23,"siteGroupName":"South","status":"Expired","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"},{"siteGroupAssignmentID":70,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":37,"roleName":"ReadOnly","siteGroup_ID":24,"siteGroupName":"North Region","status":"Expired","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"}],"count":5}';
            }
        }
    ]

};
mocks.push(SaveGroupAssignment);

var PartnerAssignmentsByUser = {
    name: 'PartnerAssignmentsByUser',
    mockRoute: '\/api\/v1\/partner-assignments\/user-id\/\\d+$',//a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success',//success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',//change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            singleResult: function () {
                return '{"result": [{"partnerAssignmentID": 1,"foreign_ID": 1,"tableName": "User","role_ID": 34,"roleName": "Admin","partner_ID": 1,"partnerName": "Foo","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00","status": "Expired"}],"count": 0,"limit": "null","offset": "null"}';
            }
        },
        {
            noResults: function () {
                return '{"result": [{}],"count": 0}';
            }
        }
    ]
};

mocks.push(PartnerAssignmentsByUser);

exports.mocks = mocks;
