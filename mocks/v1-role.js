/**
 * Created by sxd15 on 3/21/2017.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

// api/siteAssignment/userID/{userID}
var rolesWithApplicationName = {
    name: 'rolesWithApplicationName',
    mockRoute: '\/api\/v1\/roles\/with-application-name', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        singleResult: function() {
            return JSON.stringify({
                "result": [
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 1,
                        "application_ID": 1,
                        "roleName": "ApplicationAccess",
                        "description": "Base access to application",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 2,
                        "application_ID": 1,
                        "roleName": "Admin",
                        "description": "Administrative capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 3,
                        "application_ID": 1,
                        "roleName": "Engineer",
                        "description": "Engineering capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 4,
                        "application_ID": 1,
                        "roleName": "Commissioner",
                        "description": "Commissioning capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 5,
                        "application_ID": 1,
                        "roleName": "Maintenance",
                        "description": "Maintenance capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 6,
                        "application_ID": 1,
                        "roleName": "Manufacturer",
                        "description": "Manufacturing capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 7,
                        "application_ID": 1,
                        "roleName": "Manufacturer (No Check)",
                        "description": "Manufacturing capability with no check",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 14,
                        "application_ID": 1,
                        "roleName": "test role",
                        "description": "test desc",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 15,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 16,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 17,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 18,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 19,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 20,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Gordon3-DEV",
                        "roleID": 21,
                        "application_ID": 1,
                        "roleName": "string",
                        "description": "string",
                        "acuityDevOnly": null,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "IPSEngineering-DEV",
                        "roleID": 23,
                        "application_ID": 48,
                        "roleName": "Engineer",
                        "description": "Engineering capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "Acuity Brands Commissioner-DEV",
                        "roleID": 31,
                        "application_ID": 49,
                        "roleName": "Commissioner",
                        "description": "Commissioning capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": 32
                    },
                    {
                        "applicationName": "Acuity Brands Commissioner-DEV",
                        "roleID": 32,
                        "application_ID": 49,
                        "roleName": "Maintenance",
                        "description": "Maintenance capability",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "IPS_AdminTool",
                        "roleID": 33,
                        "application_ID": 47,
                        "roleName": "Commissioner",
                        "description": "Read and edit sites; Create, edit and read buildings, floors and floorspaces; Edit the lights map",
                        "acuityDevOnly": false,
                        "parentRole_ID": 37
                    },
                    {
                        "applicationName": "IPS_AdminTool",
                        "roleID": 35,
                        "application_ID": 47,
                        "roleName": "Admin",
                        "description": "Read and edit sites within the organization and administer all lower level roles",
                        "acuityDevOnly": false,
                        "parentRole_ID": 33
                    },
                    {
                        "applicationName": "IPS_AdminTool",
                        "roleID": 36,
                        "application_ID": 47,
                        "roleName": "SuperUser",
                        "description": "CRUD organizations and administer all lower level roles",
                        "acuityDevOnly": true,
                        "parentRole_ID": 35
                    },
                    {
                        "applicationName": "IPS_AdminTool",
                        "roleID": 45,
                        "application_ID": 47,
                        "roleName": "PartnerAdmin",
                        "description": "CRUD partner's organizations and administer all lower level roles",
                        "acuityDevOnly": true,
                        "parentRole_ID": 35
                    },
                    {
                        "applicationName": "IPS_AdminTool",
                        "roleID": 37,
                        "application_ID": 47,
                        "roleName": "ReadOnly",
                        "description": "Read sites, no edit privileges anywhere",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "IPSAnalytics",
                        "roleID": 38,
                        "application_ID": 50,
                        "roleName": "ReadOnly",
                        "description": "View metric data for assigned sites",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "IPSAnalytics",
                        "roleID": 39,
                        "application_ID": 50,
                        "roleName": "SuperUser",
                        "description": "Can manage all administrative operations for analytics",
                        "acuityDevOnly": true,
                        "parentRole_ID": 38
                    },
                    {
                        "applicationName": "IPS_AdminTool_FLR01",
                        "roleID": 40,
                        "application_ID": 74,
                        "roleName": "ReadOnly",
                        "description": "Read-only access",
                        "acuityDevOnly": false,
                        "parentRole_ID": null
                    },
                    {
                        "applicationName": "IPS_AdminTool_FLR01",
                        "roleID": 41,
                        "application_ID": 74,
                        "roleName": "Commissioner",
                        "description": "Read sites, Edit the lights map",
                        "acuityDevOnly": false,
                        "parentRole_ID": 40
                    },
                    {
                        "applicationName": "IPS_AdminTool_FLR01",
                        "roleID": 42,
                        "application_ID": 74,
                        "roleName": "Admin",
                        "description": "Edit sites, manage user assignments to the sites and administer all lower level roles",
                        "acuityDevOnly": false,
                        "parentRole_ID": 41
                    },
                    {
                        "applicationName": "IPS_AdminTool_FLR01",
                        "roleID": 44,
                        "application_ID": 74,
                        "roleName": "SuperUser",
                        "description": "CRUD organizations and administer all lower level roles",
                        "acuityDevOnly": false,
                        "parentRole_ID": 42
                    }
                ],
                "count": 28
            });
        }
    }]
};
mocks.push(rolesWithApplicationName);

exports.mocks = mocks;
