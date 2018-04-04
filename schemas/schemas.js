/**
 * Created by AXH12 on 11/8/2016.
 */
var argv = require('yargs')
    .command('role', 'Change role', {
        roleID: {
            describe: 'Role ID',
            demand: false,
            alias: 'id'
        }
    })
    .help()
    .argv;
var roleToTest = module.exports.currentRole = (argv && argv.roleID) || 36;

module.exports.floorSpaceMap = {
    "mapID": "{{int 100 1000}}",
    "floorSpace_ID": "{{int 100 1000}}",
    "displayName": "{{company}}",
    "displayImageUrl": "https:\/\/abldevmapstore.blob.core.windows.net\/fs106\/bd4805e2-4f93-4ca5-b66a-665865ee5037%5Cmap@2x.png",
    "tiledImageUrl": "https:\/\/abldevmapstore.blob.core.windows.net\/fs106\/bd4805e2-4f93-4ca5-b66a-665865ee5037%5CTiles\/",
    "imagePixelHeight": "{{int 100 1000}}",
    "imagePixelWidth": "{{int 100 1000}}",
    "floorSpaceLength": "{{float 0 10 round=0.0001}}",
    "floorSpaceWidth": "{{float 0 10 round=0.0001}}",
    "imageMetersPerPixel": "{{float 0 1 round=0.000001}}",
    "effectiveFrom": "2016-11-11T21:08:16+00:00",
    "effectiveTo": "2017-11-11T21:08:16+00:00",
    "folderName": "{{street}}",
    "containerName": "{{street}}",
    "GTXRotation": "null",
    "GTYRotation": "null",
    "GTWidth": "null",
    "GTHeight": "null",
    "GTX": "null",
    "GTY": "null",
    "epsg_ID": "3857"
};

module.exports.wellKnown = {
    blsPMD:{
        id: 42
    },
    application:{
        id: 47,
        name: "IPS_AdminTool"
    },
    organization:1,
    organizationWithAddressAndContact: {
        "role_ID": 36,
        "allSites": false,
        "entityKey": "ORG-9b29b827-f860-4aa8-bf24-90b487523384",
        "organizationID": "1",
        "organizationName": "Creatonix",
        "partner_ID": "1",
        "beaconProximityUUID": "5993a94c-7d97-4df7-9abf-e493bfd5d000",
        "active": true,
        "address1": "123 Gartland Street",
        "address2": "Circle",
        "city": "Fuller Road",
        "stateProvince": "CA",
        "postalCode": "79092",
        "country": "USA",
        "businessAddress_ID": "1",
        "contactEmail": "me@org.com",
        "contactName": "jane doe",
        "contactNumber": "850 867 5309",
        "contactRole": "Role",
        "contact_ID": "1",
        "sitesAssociated": null
    },
    partner: {
        contacts: [
            {
                contactID: "523",
                partner_ID: "87610020-4219-9888-3404-583214553188",
                name: "Polycore",
                type: "Other",
                address1: "697 Stockton Lane",
                address2: "Brook Street",
                address3: "Beechmont Parkway",
                address4: "Bushey Crescent",
                locality: "Some Place",
                region: "GA",
                postalCode: "14138",
                country: "USA",
                email: "jenette.carter@polycore.club",
                phone: "796-927-6703",
                active: true
            }
        ],
        partnerID: "84425806-2778-1910-8692-865246156123",
        role_ID: 36,
        name: "Keycast",
        type: "Other",
        active: true
    },
    siteGroup: 6,
    site: {
        siteID: 6,
        organization_ID: 1,
        organizationName: 'SkyCenta',
        siteName: 'MultiServ',
        businessAddress_ID: '455',
        address1: '351 Carter Street',
        city: 'Blakeley Street',
        stateProvince: 'GA',
        postalCode: '61987',
        country: 'USA'
    },
    user:1,
    buildingId: 9999,
    floorId: 9999,
    floorspace: 106,
    roles: {
        commissioner: {
            "applicationName": "IPS_AdminTool",
            "roleID": 33,
            "roleName": "Commissioner",
            "description": "Read and edit sites; Create, edit and read buildings, floors and floorspaces; Edit the lights map",
            "acuityDevOnly": false,
            "parentRole_ID": 37
        },
        admin: {
            "applicationName": "IPS_AdminTool",
            "roleID": 35,
            "roleName": "Admin",
            "description": "Read and edit sites within the organization and administer all lower level roles",
            "acuityDevOnly": false,
            "parentRole_ID": 33
        },
        partnerAdmin: {
            "applicationName": "IPS_AdminTool",
            "roleID": 45,
            "roleName": "PartnerAdmin",
            "description": "Read and edit sites within the partner's organization and administer all lower level roles",
            "acuityDevOnly": false,
            "parentRole_ID": 33
        },
        superUser: {
            "applicationName": "IPS_AdminTool",
            "roleID": 36,
            "roleName": "SuperUser",
            "description": "CRUD organizations and administer all lower level roles",
            "acuityDevOnly": true,
            "parentRole_ID": 35
        },
        readOnly: {

            "roleID": 37,
            "roleName": "ReadOnly",
            "description": "Read sites, no edit privileges anywhere",
            "acuityDevOnly": false,
            "parentRole_ID": null
        }
    }
};


module.exports.noResults = {
    result: [],
    count: 0
};

module.exports.metricConfigHourOfOperation = {
    "metricConfigHourOfOperationID": "{{int 0 1000}}",
    "site_ID": "{{int 0 1000}}",
    "hourOfOperationType": "reocurring",
    "startDate": "2016-09-12T15:38:57.9516914",
    "endDate": "2017-21-12T15:38:57.9516914",
    "weekday": "0", //api team is working to make this store an array of ints
    "startTime": "08:00:00.0000000",
    "endTime": "23:00:00.0000000"
};

module.exports.metricConfig = {
	"metricConfigID": "{{int 0 1000}}",
	"site_ID": "{{int 0 1000}}",
	"metricConfigType": "site",
	"metricStartDate": "2017-12-20T22:24:32.5288467+00:00",
	"metricEndDate": "null",
	"estimatedCaptureRate": "{{int 0 100}}",
	"visitTimeout": "{{int 0 1000}}",
	"visitTimein": "{{int 0 1000}}",
	"minimumDwellTime": "{{int 0 1000}}",
	"maximumDwellTime": "{{int 0 1000}}",
	"maximumDeviceHeat": "{{int 0 1000}}",
	"metricList": "string"
};


module.exports.building = {
    "buildingID": "{{int 100 1000}}",
    "site_ID": "{{int 100 1000}}",
    "name": "{{street}}",
    "active": true,
    "image": "string",
    "hoursOfOperation": module.exports.hoursOfOperationLegacy
};

module.exports.hoursOfOperationNew = [
    {
        "days": [
            0,
            6
        ],
        "endDate": null,
        "endTime": "00:00",
        "hourOfOperationType": "reoccuring",
        "startDate": null,
        "startTime": "00:00"
    },
    {
        "days": [
            1,
            2,
            3,
            4,
            5
        ],
        "endDate": null,
        "endTime": "17:00",
        "hourOfOperationType": "reoccuring",
        "startDate": null,
        "startTime": "08:00"
    }
];

module.exports.hoursOfOperationLegacy = [
    {
        "dayOfOperation":"Sunday",
        "operation":{
            "online":"00:00",
            "offline":"00:00"
        }
    },
    {
        "dayOfOperation":"Monday",
        "operation":{
            "online":"08:00",
            "offline":"17:00"
        }
    },
    {
        "dayOfOperation":"Tuesday",
        "operation":{
            "online":"08:00",
            "offline":"17:00"
        }
    },
    {
        "dayOfOperation":"Wednesday",
        "operation":{
            "online":"08:00",
            "offline":"17:00"
        }
    },
    {
        "dayOfOperation":"Thursday",
        "operation":{
            "online":"08:00",
            "offline":"17:00"
        }
    },
    {
        "dayOfOperation":"Friday",
        "operation":{
            "online":"08:00",
            "offline":"17:00"
        }
    },
    {
        "dayOfOperation":"Saturday",
        "operation":{
            "online":"00:00",
            "offline":"00:00"
        }
    }
];

module.exports.buildingWithoutHours = {
    "buildingID": "{{int 100 1000}}",
    "site_ID": "{{int 100 1000}}",
    "name": "{{street}}",
    "active": true,
    "image": "string",
    "hoursOfOperation": []

};

module.exports.floor = {
    "floorID": "{{int 0 1000}}",
    "building_ID": "{{int 0 1000}}",
    "name": "{{street}}",
    "level": "{{street}}",
    "verticalOrder": "{{int 0 10}}",
    "mapToken_ID": "null",
    "mapServiceType": "AGOL",
    "mapServiceURL": "string",
    "active": true,
    "floorSpaces": [
        module.exports.floorSpace,
        module.exports.floorSpace,
        module.exports.floorSpace
    ]
};

module.exports.floorwithoutSpaces = {
    "floorID": "{{int 0 1000}}",
    "building_ID": "{{int 0 1000}}",
    "name": "{{street}}",
    "level": "{{street}}",
    "verticalOrder": "{{int 0 10}}",
    "mapToken_ID": "null",
    "mapServiceType": "AGOL",
    "mapServiceURL": "string",
    "active": true
};


module.exports.user = {
    "userID": "{{int 100 1000}}",
    "tenant_ID": "{{int 0 1000}}",
    "userName": "{{email}}",
    "email": "{{email}}",
    "givenName": "{{firstName}}",
    "surname": "{{lastName}}",
    "active": "true"
};

module.exports.siteAssignment = {
    "siteAssignmentID": "{{int 0 100}}",
    "siteName": "{{street}}",
    "roleName": "{{street}}",
    "firstName": "{{firstName}}",
    "lastName": "{{lastName}}",
    "user_ID": "{{int 0 100}}",
    "role_ID": "{{int 0 100}}",
    "site_ID": "{{int 0 100}}",
    "status": "Expired",
    "effectiveFromUTCTimestamp": '2016-11-11T21:08:16+00:00',
    "effectiveToUTCTimestamp": '2016-12-11T21:08:16+00:00'
};

module.exports.siteAssignmentByUser = {
    "siteAssignmentID": 0,
    "foreign_ID": 1,
    "tableName": "User",
    "role_ID": 35,
    "roleName": "Admin",
    "site_ID": "{{int 0 100}}",
    "siteName": "{{company}}",
    "effectiveFromUTCTimestamp": "null",
    "effectiveToUTCTimestamp": "null",
    "status": "Active"
};

module.exports.siteAssignmentPut = {
    "siteAssignmentID": "{{int 0 100}}",
    "user_ID": "{{int 0 100}}",
    "role_ID": "{{int 0 100}}",
    "site_ID": "{{int 0 100}}",
    "effectiveFromUTCTimestamp": '2016-11-11T21:08:16+00:00',
    "effectiveToUTCTimestamp": '2016-12-11T21:08:16+00:00'
};

module.exports.role = {
    roleID: "{{int 0 1000}}",
    application_ID: "{{int 0 1000}}",
    roleName: "{{street}}",
    description: "description of {{street}}",
    acuityDevOnly: true,
    parentRole_ID: "{{int 0 1000}}"
};

module.exports.siteGroupAssignment = {
    "siteGroupAssignmentID": "{{int 0 100}}",
    "siteGroupName": "{{street}}",
    "roleName": "{{street}}",
    "firstName": "{{firstName}}",
    "lastName": "{{lastName}}",
    "user_ID": "{{int 0 100}}",
    "role_ID": "{{int 0 100}}",
    "siteGroup_ID": "{{int 0 100}}",
    "status": "Expired",
    "effectiveFromUTCTimestamp": '2016-11-11T21:08:16+00:00',
    "effectiveToUTCTimestamp": '2016-12-11T21:08:16+00:00'
};

module.exports.siteGroupAssignmentPut = {
    "siteGroupAssignmentID": "{{int 0 100}}",
    "user_ID": "{{int 0 100}}",
    "role_ID": "{{int 0 100}}",
    "siteGroup_ID": "{{int 0 100}}",
    "effectiveFromUTCTimestamp": '2016-11-11T21:08:16+00:00',
    "effectiveToUTCTimestamp": '2016-12-11T21:08:16+00:00'
};

module.exports.orgAssignment = {
    "orgAssignmentID": "{{int 0 100}}",
    "organizationName": "{{street}}",
    "roleName": "{{street}}",
    "user_ID": "{{int 0 100}}",
    "role_ID": "{{int 0 100}}",
    "org_ID": "{{int 0 100}}",
    "status": "Expired",
    "effectiveFromUTCTimestamp": '2016-11-11T21:08:16+00:00',
    "effectiveToUTCTimestamp": '2016-12-11T21:08:16+00:00'
};

module.exports.siteGroupSite = {
    "siteGroupSiteID": "{{int 100 1000}}",
    "siteGroup_ID": "{{int 100 1000}}",
    "siteGroupName": "{{street}}",
    "site_ID": "{{int 100 1000}}",
    "siteName": "{{street}}"
};

module.exports.userWithAssignments = {
    "userID": "{{int 0 100}}",
    "tenant_ID": "{{int 0 100}}",
    "userName": "{{email}}",
    "email": "{{email}}",
    "givenName": "{{firstName}}",
    "surname": "{{lastName}}",
    "active": "true",
    "orgAssignments": [
        module.exports.orgAssignment,
        module.exports.orgAssignment,
    ],
    "siteAssignments": [
        module.exports.siteAssignment,
        module.exports.siteAssignment,
    ]
};

module.exports.siteWithAddress = {
    "siteID": "{{int 0 100}}",
    "organization_ID": "{{int 0 100}}",
    "organizationName": "{{street}}",
    "siteName": "{{street}}",
    "businessAddress_ID": "{{int 0 100}}",
    "address1": "{{street}}",
    "address2": "{{street}}",
    "city": "{{street}}",
    "stateProvince": "GA",
    "postalCode": "{{int 10000 99999}}",
    "country": "USA",
    "serviceLevel_ID": "null",
    "serviceStatus": "string",
    "timezoneID": "{{int 0 12}}",
    "fromGeometri": false,
    "active": true,
    "lumicastConfigTag": "string"
};

module.exports.issue = {
    "result": [
        {
            "issueID": "{{int 0 100}}",
            "issueType": "issue",
            "issueName": "{{street}}",
            "building": module.exports.building,
            "floor": module.exports.floor,
            "description": "issue description here"
        }
    ],
    "count": 1
};


module.exports.emailAssignment = {
    result: [
        {
            email_assign_ID: "{{int 0 1000}}",
            user: module.exports.user,
            site: module.exports.site
        },
        {
            email_assign_ID: "{{int 0 1000}}",
            user: module.exports.user,
            site: module.exports.site
        },
        {
            email_assign_ID: "{{int 0 1000}}",
            user: module.exports.user,
            site: module.exports.site
        }
    ]
};

module.exports.buildingWithFloorAndFloorSpaces = {
    buildingID: "{{int 0 1000}}",
    site_ID: "{{int 0 1000}}",
    name: "{{street}}",
    active: true,
    floors: [
        module.exports.floor,
        module.exports.floor
    ]
};

module.exports.siteGroup = {
    "role_ID": roleToTest,
    "siteGroupID": "{{int 0 1000}}",
    "organization_ID": module.exports.wellKnown.organization,
    "siteGroupName": "{{street}}",
    "description": "description {{street}}",
    "active": true
};

module.exports.siteGroupWithSites = {
    "siteGroupID": "{{int 0 1000}}",
    "organization_ID": "{{int 0 1000}}",
    "siteGroupName": "{{street}}",
    "description": "Description by {{firstName}}",
    "sites": [
        module.exports.siteWithAddress,
        module.exports.siteWithAddress
    ]
};

module.exports.siteGroupBySiteGroupID = {
	"siteGroupName": "{{company}}",
	"siteName": "{{company}}",
	"siteGroupSiteID": "{{int 0 1000}}",
	"siteGroup_ID": "{{int 0 1000}}",
	"site_ID": "null"
};

module.exports.floorWithFloorSpaces = {
    "FloorID": "{{int 0 1000}}",
    "Building_ID": "{{int 0 1000}}",
    "Name": "{{street}}",
    "Level": "{{street}}",
    "VerticalOrder": "{{int 0 10}}",
    "MapToken_ID": "null",
    "MapServiceType": "AGOL",
    "MapServiceURL": "string",
    "active": true,
    "floorSpaces": [
        module.exports.floorSpace,
        module.exports.floorSpace
    ]
};

module.exports.floorSpace = {
    "codeBookName": "{{company}}",
    "floorSpaceMaps": [module.exports.floorSpaceMap, module.exports.floorSpaceMap, module.exports.floorSpaceMap],
    "floorSpaceID": "{{int 0 1000}}",
    "site_ID": "{{int 0 1000}}",
    "floorSpaceName": "{{street}}",
    "originLatitude": "{{int 0 100}}",
    "originLongitude": "{{int 0 100}}",
    "originElevation": "{{int 0 10}}",
    "codeBook_ID": "{{int 0 1000}}",
    "cellWidth": "{{int 1 5}}",
    "cellLength": "{{int 1 5}}",
    "floorSpaceWidth": "{{int 1 100}}",
    "floorSpaceLength": "{{int 1 100}}",
    "gridXOffset": "{{int 0 2}}",
    "gridYOffset": "{{int 0 2}}",
    "floorSpaceImageURL": "{{street}}.jpg",
    "mapOffsetX": "{{int 0 2}}",
    "mapOffsetY": "{{int 0 2}}",
    "maxMountingHeight": "{{int 20 30}}",
    "coordinateConversionRule": "{{int 0 7}}",
    "mapAngleOffsetRadians": "{{int 1 10}}",
    "floorSpaceImagePixelWidth": "{{int 1 100}}",
    "floorSpaceImagePixelHeight": "{{int 1 100}}",
    "floorSpaceImageMetersPerPixel": "{{int 1 100}}",
    "hasBLEBeacons": false,
    "fixtureType": "string",
    "operatingPoint": "{{int 1 100}}",
    "SWCornerLatitude": "{{int 1 100}}",
    "SWCornerLongitude": "{{int 1 100}}",
    "NECornerLatitude": "{{int 1 100}}",
    "NECornerLongitude": "{{int 1 100}}",
    "VLCEnabled": "true",
    "floor_ID": "{{int 1 100}}",
    "GTXRotation": "{{int 1 100}}",
    "GTYRotation": "{{int 1 100}}",
    "GTWidth": "{{int 1 100}}",
    "GTHeight": "{{int 1 100}}",
    "GTX": "{{int 1 100}}",
    "GTY": "{{int 1 100}}",
    "GTHeadingOffset": "{{int 1 100}}",
    "GTImageOrigin": "ll",
    "role_ID": roleToTest,
    "roleName": "SuperUser",
    "active": true,
    "hasVLC": true
};

module.exports.floorSpaceWithLightsmap = {
    "floorSpace": module.exports.floorSpace,
    //TODO: refactor luminaireTypes & luminaireSummary to use already defined schema types ; note.. need to make sure getFloorSpaceMaps still works as expected after the refactor
    "luminaireTypes": [
        {
            "luminaireTypeID": 1,
            "organization_ID": 1,
            "displayName": "ESL 4x2",
            "exteriorWidth": 1.2192,
            "exteriorLength": 0.6096,
            "interiorWidth": 1.2192,
            "interiorLength": 0.6096
        },
        {
            "luminaireTypeID": 2,
            "organization_ID": 1,
            "displayName": "ESL 2x4",
            "exteriorWidth": 0.6096,
            "exteriorLength": 1.2192,
            "interiorWidth": 0.6096,
            "interiorLength": 1.2192
        },
        {
            "luminaireTypeID": 3,
            "organization_ID": 1,
            "displayName": "ESL 2x2",
            "exteriorWidth": 0.6096,
            "exteriorLength": 0.6096,
            "interiorWidth": 0.6096,
            "interiorLength": 0.6096
        },
        {
            "luminaireTypeID": 4,
            "organization_ID": 1,
            "displayName": "BLT 4x2",
            "exteriorWidth": 1.2192,
            "exteriorLength": 0.6096,
            "interiorWidth": 1.2192,
            "interiorLength": 0.2032
        },
        {
            "luminaireTypeID": 5,
            "organization_ID": 1,
            "displayName": "BLT 2x4",
            "exteriorWidth": 0.6096,
            "exteriorLength": 1.2192,
            "interiorWidth": 0.2032,
            "interiorLength": 1.2192
        },
        {
            "luminaireTypeID": 6,
            "organization_ID": 1,
            "displayName": "BLT 2x2 v1",
            "exteriorWidth": 0.6096,
            "exteriorLength": 0.6096,
            "interiorWidth": 0.6096,
            "interiorLength": 0.2032
        },
        {
            "luminaireTypeID": 31,
            "organization_ID": 1,
            "displayName": "VTLR 2x4",
            "exteriorWidth": 1.2192,
            "exteriorLength": 0.6096,
            "interiorWidth": 1.2192,
            "interiorLength": 0.2032
        },
        {
            "luminaireTypeID": 32,
            "organization_ID": 1,
            "displayName": "TestOnly1a",
            "exteriorWidth": 0.6096,
            "exteriorLength": 0.6094,
            "interiorWidth": 0.6,
            "interiorLength": 0.6093
        },
        {
            "luminaireTypeID": 34,
            "organization_ID": 1,
            "displayName": "SLOT6 H",
            "exteriorWidth": 1.2192,
            "exteriorLength": 0.1524,
            "interiorWidth": 1.2192,
            "interiorLength": 0.1524
        },
        {
            "luminaireTypeID": 35,
            "organization_ID": 1,
            "displayName": "SLOT6 V",
            "exteriorWidth": 0.1524,
            "exteriorLength": 1.2192,
            "interiorWidth": 0.1524,
            "interiorLength": 1.2192
        },
        {
            "luminaireTypeID": 63,
            "organization_ID": 1,
            "displayName": "Ninja Light",
            "exteriorWidth": 1.2,
            "exteriorLength": 2.12,
            "interiorWidth": 1.1,
            "interiorLength": 1.3
        }
    ],
    "luminaireSummary": [
        {
            "luminairePositionId": 218729,
            "id": 19,
            "tag": null,
            "x1": -8.73,
            "x2": -8.73,
            "x3": -8.96,
            "y1": -9.14,
            "y2": -10.36,
            "y3": -10.36,
            "z": 0,
            "BLEBeaconId": 1,
            "floorSpaceCatalog_ID": 65584,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218731,
            "id": 12,
            "tag": null,
            "x1": -8.73,
            "x2": -8.73,
            "x3": -8.96,
            "y1": -6.7,
            "y2": -7.92,
            "y3": -7.92,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65586,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218733,
            "id": 11,
            "tag": null,
            "x1": -8.73,
            "x2": -8.73,
            "x3": -8.96,
            "y1": -4.26,
            "y2": -5.48,
            "y3": -5.48,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65588,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218734,
            "id": 1,
            "tag": null,
            "x1": -8.73,
            "x2": -8.73,
            "x3": -8.96,
            "y1": -1.82,
            "y2": -3.04,
            "y3": -3.04,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65589,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218736,
            "id": 13,
            "tag": null,
            "x1": -6.29,
            "x2": -6.29,
            "x3": -6.52,
            "y1": -6.7,
            "y2": -7.92,
            "y3": -7.92,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65591,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218738,
            "id": 10,
            "tag": null,
            "x1": -6.29,
            "x2": -6.29,
            "x3": -6.52,
            "y1": -4.26,
            "y2": -5.48,
            "y3": -5.48,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65593,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218740,
            "id": 6,
            "tag": null,
            "x1": -6.29,
            "x2": -6.29,
            "x3": -6.52,
            "y1": -1.82,
            "y2": -3.04,
            "y3": -3.04,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65595,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218742,
            "id": 18,
            "tag": null,
            "x1": -6.29,
            "x2": -6.29,
            "x3": -6.5,
            "y1": -9.14,
            "y2": -10.36,
            "y3": -10.36,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65597,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218744,
            "id": 14,
            "tag": null,
            "x1": -3.86,
            "x2": -3.86,
            "x3": -4.08,
            "y1": -6.7,
            "y2": -7.92,
            "y3": -7.92,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65599,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218746,
            "id": 2,
            "tag": null,
            "x1": -3.86,
            "x2": -3.86,
            "x3": -4.08,
            "y1": -4.26,
            "y2": -5.48,
            "y3": -5.48,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65601,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218748,
            "id": 5,
            "tag": null,
            "x1": -3.86,
            "x2": -3.86,
            "x3": -4.08,
            "y1": -1.82,
            "y2": -3.04,
            "y3": -3.04,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65603,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218750,
            "id": 17,
            "tag": null,
            "x1": -3.86,
            "x2": -3.86,
            "x3": -4.06,
            "y1": -9.14,
            "y2": -10.36,
            "y3": -10.36,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65605,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218752,
            "id": 16,
            "tag": null,
            "x1": -1.42,
            "x2": -1.42,
            "x3": -1.65,
            "y1": -9.14,
            "y2": -10.36,
            "y3": -10.36,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65607,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218754,
            "id": 15,
            "tag": null,
            "x1": -1.42,
            "x2": -1.42,
            "x3": -1.65,
            "y1": -6.7,
            "y2": -7.92,
            "y3": -7.92,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65609,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218756,
            "id": 8,
            "tag": null,
            "x1": -1.42,
            "x2": -1.42,
            "x3": -1.65,
            "y1": -4.26,
            "y2": -5.48,
            "y3": -5.48,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65611,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        },
        {
            "luminairePositionId": 218758,
            "id": 4,
            "tag": null,
            "x1": -1.42,
            "x2": -1.42,
            "x3": -1.65,
            "y1": -1.82,
            "y2": -3.04,
            "y3": -3.04,
            "z": 0,
            "BLEBeaconId": "{{int 1 10000}}",
            "floorSpaceCatalog_ID": 65613,
            "flagNotes": null,
            "controlGroupId": null,
            "externalWidth": 2,
            "externalLength": 4,
            "VLCEnabled": false
        }
    ]
};

module.exports.deploymentSetting = {
    applicationSettingID: "{{int 10 1000}}",
    organization_ID: "{{int 100 1000}}",
    applicationName: "{{street}}",
    settingKey: "{{street}}",
    settingValue: "{{int 10 1000}}_{{street}}"
};

module.exports.partnerAppSetting = {
    applicationSettingID: "{{int 10 1000}}",
    partner_ID: "{{int 10000000 99999999}}-{{int 1000 9999}}-{{int 1000 9999}}-{{int 1000 9999}}-{{int 100000000000 999999999999}}",
    applicationName: "{{street}}",
    settingKey: "{{street}}",
    settingValue: "{{int 10 1000}}_{{street}}"
};

module.exports.APIKey = {
    "apiKeyID": "{{int 0 1000}}",
    "apiKeyValue": "873FUC87C9G29N",
    "effectiveFrom": "2016-11-11T21:08:16+00:00",
    "effectiveTo": "2017-11-11T21:08:16+00:00",
    "type": "Read Only",
    "description": "{{street}}",
    "organization_ID": "{{int 0 1000}}",
    "partner_ID": null,
    "acuityDevOnly": false
};

module.exports.luminaireType = {
    "luminaireTypeID": "{{int 0 1000}}",
    "organization_ID": "{{int 0 10}}",
    "displayName": "{{street}}",
    "exteriorWidth": "{{int 1 10}}",
    "exteriorLength": "{{int 1 10}}",
    "interiorWidth": "{{int 1 10}}",
    "interiorLength": "{{int 1 10}}"
};

module.exports.Light = {
    lightID: "{{int 0 100}}",
    lightName: "{{street}}",
    interiorWidth: "{{int 1 10}}",
    interiorLength: "{{int 1 10}}",
    exteriorWidth: "{{int 1 10}}",
    exteriorLength: "{{int 1 10}}"
};



module.exports.knownDevice = {
    "knownDeviceDetailID": "{{int 0 1000}}",
    "knownDevice_ID": "{{int 0 1000}}",
    "deviceType": "{{firstName}}",
    "client_ID": "{{company}}",
    "device_ID": "{{street}}",
    "validFrom": "2017-01-04T16:12:58.7144049",
    "validTo": "9999-12-31T23:59:59.9999999",
    "categories": [
        {
            "knownDeviceCategoryID": 0,
            "site_ID": "null",
            "siteGroup_ID": "null",
            "categoryName": "string"
        }
    ],
    "site_ID": 123
};

module.exports.knownDeviceBySiteID = {
	"knownDeviceID": "{{int 0 1000}}",
    "site_ID": "{{int 0 1000}}",
    "client_ID": "{{company}}",
    "active": "{{boolean}}",
    "connectionString": "123-conn-string",
    "userInfo":
        {
            "foo": "{{lorem 1}}",
            "bar": "{{lorem 1}}"
        },
    "categories": [
	    {
		    "knownDeviceCategoryID": "{{int 0 1000}}",
		    "organization_ID": "{{int 0 1000}}",
		    "categoryName": "Golf",
		    "active": "{{boolean}}"
	    }
    ],
    "devices":[
	    {
		    "knownDeviceDetailID": "{{int 0 1000}}",
		    "knownDevice_ID": "{{int 0 1000}}",
		    "deviceType": "{{company}}",
		    "client_ID": "{{company}}",
		    "device_ID": "{{company}}"
	    }
    ]
};

module.exports.KnownDeviceDetailWithKnownDevice = {
    knownDeviceDetailID: "{{int 0 1000}}",
    knownDevice_ID: "{{int 0 1000}}",
    knownDevice: module.exports.knownDevice,
    deviceType: "wifi",
    client_ID: "{{int 0 1000}}",
    device_ID: "{{int 0 1000}}",
    validFrom: "2016-11-15T11:29:30-05:00",
    validTo: "2017-11-15T11:29:30-05:00"
};

module.exports.controller = {
    "controllerID": "{{int 0 1000}}",
    "organization_ID": "{{int 0 1000}}",
    "building_ID": "{{int 0 1000}}",
    "floors": [{id: 1, name: "First Floor"}, {id: 2, name: "Second Floor"}, {id: 3, name: "Third Floor"}],
    "deviceId": "{{company}}",
    "topologyJson": "{{company}}",
    "connectionString": "uxlogic=somedb",
    "categories": [
        {
            "knownDeviceCategoryID": "{{int 0 1000}}",
            "organization_ID": "{{int 0 1000}}",
            "categoryName": "Golf",
            "active": "{{boolean}}"
        }
    ]
};

module.exports.beacon = {
    "beaconID": "{{int 0 1000}}",
    "knownDeviceDetailID": "{{int 0 1000}}",
    "knownDevice_ID": "{{int 0 1000}}",
    "knownDevice": module.exports.knownDevice,
    "userInfo":
        {
            "foo": "{{lorem 1}}",
            "bar": "{{lorem 1}}"
        },
    "deviceType": "wifi",
    "frequency": "30",
    "organization_ID": "{{int 0 1000}}",
    "deviceId": "{{company}}",
    "topologyJson": "{{company}}",
    "categories": [
        {
            "knownDeviceCategoryID": "{{int 0 1000}}",
            "organization_ID": "{{int 0 1000}}",
            "categoryName": "Golf",
            "active": "{{boolean}}"
        }
    ],
    "devices":[
        {
            "knownDeviceDetailID": "{{int 0 1000}}",
            "knownDevice_ID": "{{int 0 1000}}",
            "deviceType": "{{company}}",
            "client_ID": "{{company}}",
            "device_ID": "{{company}}"
        }
    ]
};

module.exports.connectionString = {
	"msg": "{{lorem 3}}",
	"requestId": "{{int 0 100}}",
	"code": "{{guid}}"
};

module.exports.proxySite = {
    "siteID": "{{int 0 1000}}",
    "siteName": "{{company}}",
    "active": true
};

module.exports.metricConfigSummary = {
    "metricConfigID": "{{int 0 1000}}",
    "site_ID": "{{int 0 1000}}",
    "metricStartDate": "2016-09-12T15:38:57.9516914",
    "metricEndDate": "2017-21-12T15:38:57.9516914",
    "estimatedCaptureRate": "1",
    "visitTimeout": "{{int 10 40}}",
    "minimumDwellTime": "{{int 5 15}}",
    "maximumDwellTime": "{{int 45 50}}",
    "maximumDeviceHeat": 100,
    "metricList": [3, 4],
    "hoursOfOperation": [module.exports.metricConfigHourOfOperation,
        module.exports.metricConfigHourOfOperation,
        module.exports.metricConfigHourOfOperation],
    "proxySites": [module.exports.proxySite,
        module.exports.proxySite,
        module.exports.proxySite]
};

module.exports.luminaireSummary = {
    "luminairePositionId": "{{int 0 1000}}",
    "id": "{{int 0 1000}}",
    "tag": "string",
    "x1": "{{int 0 1000}}",
    "x2": "{{int 0 1000}}",
    "x3": "{{int 0 1000}}",
    "y1": "{{int 0 1000}}",
    "y2": "{{int 0 1000}}",
    "y3": "{{int 0 1000}}",
    "z": "{{int 0 1000}}",
    "BLEBeaconId": "{{company}}",
    "floorSpaceCatalog_ID": "{{company}}",
    "flagNotes": "{{company}}",
    "controlGroupId": "{{company}}",
    "externalWidth": "{{int 0 1000}}",
    "externalLength": "{{int 0 1000}}",
    "VLCEnabled": false
};


/////////////////////////////////////////////

module.exports.knownDeviceCategory = {
    "knownDeviceCategoryID": "{{int 0 1000}}",
    "organization_ID": module.exports.wellKnown.organization,
    "categoryName": "{{company}}",
    "active": true
};


module.exports.organizationWithAddressAndContact = {
    "role_ID": roleToTest,
    "allSites": false,
    "entityKey": "ORG-9b29b827-f860-4aa8-bf24-90b487523384", // needed for V1 api only ...
    "organizationID": "{{int 10000 99999}}",
    "organizationName": "{{company}}",
    "partner_ID": "{{int 0 1000}}",
    "beaconProximityUUID": "5993a94c-7d97-4df7-9abf-e493bfd5d000",
    "active": true,
    "address1": "{{street}}",
    "address2": "{{street}}",
    "city": "{{street}}",
    "stateProvince": "CA",
    "postalCode": "{{int 10000 99999}}",
    "country": "USA",
    "businessAddress_ID": "{{int 0 1000}}",
    "contactEmail": "{{street}}",
    "contactName": "{{firstName}} {{lastName}}",
    "contactNumber": "{{int 100 999}} {{int 100 999}} {{int 1000 9999}}",
    "contactRole": "{{street}}",
    "contact_ID": "{{int 0 1000}}",
    "sitesAssociated": null
};

module.exports.partnersWithContacts = {
    "contacts": [
        {
            "contactID": "{{int 100 1000}}",
            "partner_ID": "{{int 10000000 99999999}}-{{int 1000 9999}}-{{int 1000 9999}}-{{int 1000 9999}}-{{int 100000000000 999999999999}}",
            "name": "{{company}}",
            "type": "Other",
            "address1": "{{int 1 1000}} {{street}}",
            "address2": "{{street}}",
            "address3": "{{street}}",
            "address4": "{{street}}",
            "locality": "Some Place",
            "region": "GA",
            "postalCode": "{{int 11111 99999}}",
            "country": "USA",
            "email": "{{email}}",
            "phone": "{{int 111 888}}-{{int 111 999}}-{{int 1111 9999}}",
            "active": true
        }
    ],
    "partnerID": "{{int 10000000 99999999}}-{{int 1000 9999}}-{{int 1000 9999}}-{{int 1000 9999}}-{{int 100000000000 999999999999}}",
    "role_ID": roleToTest,
    "name": "{{company}}",
    "type": "Other",
    "active": true
};

module.exports.site = {
    "siteID": "{{int 100 1000}}",
    "organization_ID": module.exports.wellKnown.organization,
    "organizationName": "{{company}}",
    "siteName": "{{company}}",
    "businessAddress_ID": "{{int 0 1000}}",
    "address1": "{{int 0 1000}} {{street}}",
    "address2": null,
    "city": "{{street}}",
    "stateProvince": "GA",
    "postalCode": "{{int 11111 99999}}",
    "country": "USA",
    "serviceLevel_ID": 1,
    "serviceStatus": "ACTIVE",
    "timezoneID": 1230,
    "fromGeometri": false,
    "active": true,
    "lumicastConfigTag": "null",
    "swCornerLatitude": 32.657875736955,
    "swCornerLongitude": 37.44140625,
    "neCornerLatitude": 43.834526782236,
    "neCornerLongitude": 58.88671875,
    "centroidLatitude": 38.246201259596,
    "centroidLongitude": 48.1640625,
    "role_ID": roleToTest
};

module.exports.trueSite = {
  "siteId": 1,
  "siteName": "Default Site 1 ",
  "serviceStatus": "ACTIVE",
  "floorSpaceSummaryDTO": [
    {
      "floorSpaceId": 1,
      "floorSpaceName": "Default FloorSpace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 29,
      "floorSpaceName": "test floor1",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 31,
      "floorSpaceName": "test floor1",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 32,
      "floorSpaceName": "test floor1",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 34,
      "floorSpaceName": "test floor1",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 35,
      "floorSpaceName": "test floor1",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 37,
      "floorSpaceName": "test floor1",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 57,
      "floorSpaceName": "Floorspace TJ146",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 67,
      "floorSpaceName": "Floorspace Name",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 68,
      "floorSpaceName": "Floorspace Namefoo",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 72,
      "floorSpaceName": "New Floorspace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 74,
      "floorSpaceName": "whyyyyyy",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 75,
      "floorSpaceName": "Test Floorspace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 82,
      "floorSpaceName": "Floorspace Name2",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 89,
      "floorSpaceName": "sprint floorspace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 94,
      "floorSpaceName": "CAF FS",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 116,
      "floorSpaceName": "Default FloorSpace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 117,
      "floorSpaceName": "Default FloorSpace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 118,
      "floorSpaceName": "Default FloorSpace",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 120,
      "floorSpaceName": "Default FloorSpace-vlctest",
      "hasBLEBeacons": false
    },
    {
      "floorSpaceId": 121,
      "floorSpaceName": "Floorspace Name-vlc-from-admin",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 122,
      "floorSpaceName": "Floorspace Name-vlc-test-admin",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 123,
      "floorSpaceName": "Default FloorSpace-vlctest1",
      "hasBLEBeacons": false
    }
  ]
};

module.exports.blsPMDSite = {
  "siteId": 42,
  "siteName": "BLS - PMD",
  "serviceStatus": "ACTIVE",
  "floorSpaceSummaryDTO": [
    {
      "floorSpaceId": 47,
      "floorSpaceName": "IPS Mobile Area",
      "hasBLEBeacons": true
    },
    {
      "floorSpaceId": 48,
      "floorSpaceName": "Breakroom",
      "hasBLEBeacons": true
    }
  ]
};

module.exports.floorMapToken = {
    "floorID": "{{int 100 1000}}",
    "building_ID": "{{int 100 1000}}",
    "name": "{{company}}",
    "level": "1",
    "verticalOrder": 0,
    "mapServiceType": null,
    "mapServiceURL": null,
    "authType": null,
    "mapToken_ID": null,
    "token": null,
    "token_Expire_Date": null,
    "active": true
};

module.exports.zone = {
    "type": "Feature",
    "properties": {
        "zoneID": "{{int 100 1000}}",
        "site_ID": "{{int 100 1000}}",
        "floor_ID": "{{int 100 1000}}",
        "name": "{{street}}",
        "zoneType": "Action",
        "enterTrigger": true,
        "exitTrigger": false,
        "dwellTriggerMS": 144600,
        "messageContent": {}
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    -84.0369632095099,
                    33.6835769591773
                ],
                [
                    -84.0369611978531,
                    33.6836059738897
                ],
                [
                    -84.0369015187025,
                    33.6836132275662
                ],
                [
                    -84.0368834137917,
                    33.6835674735961
                ],
                [
                    -84.0369632095099,
                    33.6835769591773
                ]
            ]
        ]
    }
};

module.exports.sensor = {
	"sensor_ID": "{{int 0 1000}}",
	"zone_ID": "{int 100 1000}}",
	"label": "{{street}}",
	"deviceID": "{{street}}",
	"modelName": "{{street}}",
	"sensorType": "{{street}}",
	"hoursOfOperation": "string",
	"firmwareVersion": "string",
	"dateCode": "string",
	"controllerID": "{{int 0 1000}}",
	"online": "null",
	"organization_ID": "{{int 0 1000}}"
};

module.exports.icon = {
    "cssClass": "fa-picture-o",
    "icon": "\uf03e"
};

module.exports.tag = {
    "tagID": "{{int 0 1000}}",
	"relatedObjects": {
		"assets": [1,2,3,4,5],
		"buildings": [10,9,8,7,6,5,4,3,2,1],
		"zones": [11,22,33]
	},
    "organization_ID": "{{int 0 1000}}",
    "name": "{{company}}",
    "description": "{{lorem 2}}",
    "displayIcon": module.exports.icon,
    "active": "true"
};



//id : the database primary key
//beaconId: some value, guid maybe, from the manufacturer to identify THIS beacon
//active: 'deleted' or not
//frequency: integer?  float?  Need clarification
//description: can be null
//icon: what will be displayed in the mapping app for THIS instance of a beacon
//additionalProperties: user defined custom propertied for THIS beacon
//tags: list of all categories assigned to THIS beacon
module.exports.assetBeacon = {
    "knownDeviceID": "{{int 0 1000}}",
    "deviceID": "something_set_from_the_manufacturer_maybe???",
    "deviceType": "beacon",
    "active": "true",
    "frequency": "3",
    "description": "foobar",
    "displayIcon": module.exports.icon,
    "optionalProperties": [
    {
        "knownDeviceOptionalPropertyID": "{{int 0 1000}}",
        "key": "foo",
        "value": "bar",
        "propertyType": {"propertyTypeID":1, "name":"string"}
    },
    {
        "knownDeviceOptionalPropertyID": "{{int 0 1000}}",
        "key": "bar",
        "value": "foo",
        "propertyType": {"propertyTypeID":1, "name":"string"}
    }],
    "tags": [ module.exports.tag, module.exports.tag]
};