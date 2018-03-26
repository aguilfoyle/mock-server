/**
 * Created by sxd15 on 8/23/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var GetUsersByOrganization = {
    name: 'GetUsersByOrganization',
    mockRoute: '\/api\/user\/organizationID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
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
    mockRoute: '/api/siteAssignment/userID/\\d+$',
    testScope: 'success',
    testScenario: 'multipleResult',
    jsonTemplate: [{
        multipleResult: function () {
            return '{"result":[{"siteAssignmentID":158,"foreign_ID":1,"tableName":"User","role_ID":23,"roleName":"Engineer","site_ID":17,"siteName":"BLS - ABS9","effectiveFromUTCTimestamp":null,"effectiveToUTCTimestamp":null,"status":"Active"},{"siteAssignmentID":241,"foreign_ID":1,"tableName":"User","role_ID":35,"roleName":"Admin","site_ID":101,"siteName":"BLS - PMD","effectiveFromUTCTimestamp":"2017-05-15T00:00:00","effectiveToUTCTimestamp":"2017-05-31T00:00:00","status":"Expired"},{"siteAssignmentID":240,"foreign_ID":1,"tableName":"User","role_ID":37,"roleName":"ReadOnly","site_ID":101,"siteName":"BLS - PMD","effectiveFromUTCTimestamp":"2017-03-21T00:00:00","effectiveToUTCTimestamp":"2017-03-31T00:00:00","status":"Expired"},{"siteAssignmentID":2,"foreign_ID":1,"tableName":"User","role_ID":42,"roleName":"Admin","site_ID":101,"siteName":"BLS - PMD","effectiveFromUTCTimestamp":"2016-06-01T15:37:59.327","effectiveToUTCTimestamp":"2017-08-23T18:46:42.577","status":"Active"}],"count":4}';
        }
    }]

};
mocks.push(SiteAssignmentsByUser);

var GetGroupAssignmentsByUser = {
    name: 'GetGroupAssignmentsByUser',
    mockRoute: '/api/siteGroupAssignment/withNames/userID/\\d+$',
    testScope: 'success',
    testScenario: 'multipleResult',
    jsonTemplate: [{
        multipleResult: function () {
            return '{"result":[{"siteGroupAssignmentID":13,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":1,"roleName":"ApplicationAccess","siteGroup_ID":6,"siteGroupName":"test","status":"Expired","effectiveFromUTCTimestamp":"2016-12-06T00:00:00","effectiveToUTCTimestamp":"2016-12-31T00:00:00"},{"siteGroupAssignmentID":12,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":4,"roleName":"Commissioner","siteGroup_ID":5,"siteGroupName":null,"status":"Active","effectiveFromUTCTimestamp":null,"effectiveToUTCTimestamp":null},{"siteGroupAssignmentID":4,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":4,"roleName":"Commissioner","siteGroup_ID":7,"siteGroupName":null,"status":"Expired","effectiveFromUTCTimestamp":"2016-08-15T20:54:00","effectiveToUTCTimestamp":"2016-09-30T23:59:59.999"},{"siteGroupAssignmentID":69,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":37,"roleName":"ReadOnly","siteGroup_ID":23,"siteGroupName":"South","status":"Expired","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"},{"siteGroupAssignmentID":70,"foreign_ID":1,"tableName":"User","firstName":"Super","lastName":"Admin","role_ID":37,"roleName":"ReadOnly","siteGroup_ID":24,"siteGroupName":"North Region","status":"Expired","effectiveFromUTCTimestamp":"2017-07-19T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"}],"count":5}';
        }
    }]

};
mocks.push(GetGroupAssignmentsByUser);

var OrgAssignmentsByUser = {
    name: 'OrgAssignmentsByUser',
    mockRoute: '/api/orgAssignment/userID/\\d+$',
    testScope: 'success',
    testScenario: 'multipleResult',
    jsonTemplate: [{
        multipleResult: function () {
            return '{"result":[{"orgAssignmentID":255,"foreign_ID":1,"tableName":"User","role_ID":35,"org_ID":65,"allSites":false,"effectiveFromUTCTimestamp":"2017-07-04T00:00:00","effectiveToUTCTimestamp":"2017-07-20T00:00:00"}],"count":1}';
        }
    }]

};
mocks.push(OrgAssignmentsByUser);

exports.mocks = mocks;
