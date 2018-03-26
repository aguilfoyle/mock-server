/**
 * Created by AXH12 on 11/10/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

// api/issues/siteID/{siteID}
var getFloorSpacesBySite = {
    name: 'getFloorSpacesBySite',
    mockRoute: '\/api\/floorSpace\/siteID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            singleResult: function () {
                var result = [];

                var wellKnown = JSON.parse(JSON.stringify(schemas.floorSpace));
                wellKnown.floor_ID = schemas.wellKnown.floorId;
                wellKnown.floorSpace_ID = schemas.wellKnown.floorspace;
                wellKnown.site_ID = schemas.wellKnown.site.siteID;
                result.push(wellKnown);

                return JSON.stringify({
                    result: result,
                    count: 1
                });
            },

            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.floorSpace);
                }

                var wellKnown = JSON.parse(JSON.stringify(schemas.floorSpace));
                wellKnown.floor_ID = schemas.wellKnown.floorId;
                wellKnown.floorSpace_ID = schemas.wellKnown.floorspace;
                wellKnown.site_ID = schemas.wellKnown.site.siteID;
                result[0] = wellKnown;

                result[1].site_ID = schemas.wellKnown.site.siteID;

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
mocks.push(getFloorSpacesBySite);

var getFloorSpaceMaps = {
    name: 'getFloorSpaceMaps',
    mockRoute: '\/api\/floorSpaceMap\/floorSpaceID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.floorSpaceMap);
                }
                result[0].floorSpace_ID = schemas.wellKnown.floorspace;
                return JSON.stringify({
                    result: result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(getFloorSpaceMaps);

var getFloorSpaceMaps = {
    name: 'getFloorSpaceWithLightsmap',
    mockRoute: '\/api\/floorSpace\/withLightsmap\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'mixedMode',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                var result = schemas.floorSpaceWithLightsmap;
                result.floorSpace.cellWidth = 4;
                result.floorSpace.cellLength = 2;
                result.floorSpace.floorSpaceWidth = 15.23;
                result.floorSpace.floorSpaceLength = 15.23;
                result.floorSpace.gridXOffset = 0;
                result.floorSpace.gridYOffset = 0;
                result.floorSpace.maxMountingHeight = 5;
                delete result.floorSpaceImagePixelWidth;
                delete result.floorSpaceImagePixelHeight;
                delete result.floorSpaceImageMetersPerPixel;
                delete result.floorSpaceImageURL;
                delete result.NECornerLatitude;
                delete result.NECornerLongitude;
                delete result.originElevation;
                delete result.originLatitude;
                delete result.originLongitude;
                delete result.SWCornerLatitude;
                delete result.SWCornerLongitude;
                result.floorSpace.cellWidth = 2;
                result.floorSpace.cellLength = 4;
                result.luminaireSummary = [];

                return JSON.stringify(result);
            },

            mixedMode: function () {
                var result = schemas.floorSpaceWithLightsmap;
                result.floorSpace.cellWidth = 4;
                result.floorSpace.cellLength = 2;
                result.floorSpace.floorSpaceWidth = 15.23;
                result.floorSpace.floorSpaceLength = 15.23;
                result.floorSpace.gridXOffset = 0;
                result.floorSpace.gridYOffset = 0;
                result.floorSpace.maxMountingHeight = 5;
                result.floorSpace.hasBLEBeacons = true;
                result.floorSpace.hasVLC = true;
                return JSON.stringify(result);
            },

            bleOnly: function () {
                var result = schemas.floorSpaceWithLightsmap;
                result.floorSpace.cellWidth = 4;
                result.floorSpace.cellLength = 2;
                result.floorSpace.floorSpaceWidth = 15.23;
                result.floorSpace.floorSpaceLength = 15.23;
                result.floorSpace.gridXOffset = 0;
                result.floorSpace.gridYOffset = 0;
                result.floorSpace.maxMountingHeight = 5;
                result.floorSpace.hasBLEBeacons = true;
                result.floorSpace.hasVLC = false;
                return JSON.stringify(result);
            },

            vlcOnly: function () {
                var result = schemas.floorSpaceWithLightsmap;
                result.floorSpace.cellWidth = 4;
                result.floorSpace.cellLength = 2;
                result.floorSpace.floorSpaceWidth = 15.23;
                result.floorSpace.floorSpaceLength = 15.23;
                result.floorSpace.gridXOffset = 0;
                result.floorSpace.gridYOffset = 0;
                result.floorSpace.maxMountingHeight = 5;
                result.floorSpace.hasBLEBeacons = true;
                result.floorSpace.hasVLC = true;
                return JSON.stringify(result);
            },

            smallMap: function () {
              return '{"floorSpace":{"codeBookName":"2000 codebook","role_ID":45,"roleName":"PartnerAdmin","floorSpaceMaps":[],"floorSpaceID":1,"site_ID":6,"floorSpaceName":"Floor1","codeBook_ID":3,"cellWidth":2.000000,"cellLength":2.000000,"floorSpaceWidth":3.657599,"floorSpaceLength":3.047999,"gridXOffset":1.187500,"gridYOffset":0.333300,"mapOffsetX":0.000000,"mapOffsetY":0.000000,"maxMountingHeight":2.480000,"coordinateConversionRule":0,"mapAngleOffsetRadians":0.000000,"hasBLEBeacons":true,"hasVLC":true,"fixtureType":null,"operatingPoint":null,"VLCEnabled":true,"floor_ID":1,"GTXRotation":null,"GTYRotation":null,"GTWidth":null,"GTHeight":null,"GTX":null,"GTY":null,"GTHeadingOffset":null,"GTImageOrigin":"ll","active":true},"luminaireTypes":[{"luminaireTypeID":1,"organization_ID":1,"displayName":"ESL 4x2","exteriorWidth":1.219200,"exteriorLength":0.609600,"interiorWidth":1.219200,"interiorLength":0.609600},{"luminaireTypeID":2,"organization_ID":1,"displayName":"ESL 2x4","exteriorWidth":0.609600,"exteriorLength":1.219200,"interiorWidth":0.609600,"interiorLength":1.219200},{"luminaireTypeID":3,"organization_ID":1,"displayName":"ESL 2x2","exteriorWidth":0.609600,"exteriorLength":0.609600,"interiorWidth":0.609600,"interiorLength":0.609600},{"luminaireTypeID":4,"organization_ID":1,"displayName":"BLT 4x2","exteriorWidth":1.219200,"exteriorLength":0.609600,"interiorWidth":1.219200,"interiorLength":0.203200},{"luminaireTypeID":5,"organization_ID":1,"displayName":"BLT 2x4","exteriorWidth":0.609600,"exteriorLength":1.219200,"interiorWidth":0.203200,"interiorLength":1.219200},{"luminaireTypeID":6,"organization_ID":1,"displayName":"BLT 2x2 v1","exteriorWidth":0.609600,"exteriorLength":0.609600,"interiorWidth":0.609600,"interiorLength":0.203200},{"luminaireTypeID":31,"organization_ID":1,"displayName":"VTLR 2x4","exteriorWidth":1.219200,"exteriorLength":0.609600,"interiorWidth":1.219200,"interiorLength":0.203200},{"luminaireTypeID":32,"organization_ID":1,"displayName":"TestOnly1a","exteriorWidth":0.609600,"exteriorLength":0.609400,"interiorWidth":0.600000,"interiorLength":0.609300},{"luminaireTypeID":34,"organization_ID":1,"displayName":"SLOT6 H","exteriorWidth":1.219200,"exteriorLength":0.152400,"interiorWidth":1.219200,"interiorLength":0.152400},{"luminaireTypeID":35,"organization_ID":1,"displayName":"SLOT6 V","exteriorWidth":0.152400,"exteriorLength":1.219200,"interiorWidth":0.152400,"interiorLength":1.219200},{"luminaireTypeID":63,"organization_ID":1,"displayName":"Ninja Light","exteriorWidth":1.200000,"exteriorLength":2.120000,"interiorWidth":1.100000,"interiorLength":1.300000}],"luminaireSummary":[{"luminairePositionId":71437,"id":908,"tag":"0","x1":-1.200000,"x2":-1.200000,"x3":-1.460000,"y1":-0.100000,"y2":-0.400000,"y3":-0.400000,"z":0.000000,"BLEBeaconId":0,"floorSpaceCatalog_ID":65748,"flagNotes":null,"controlGroupId":null,"externalWidth":1.000000,"externalLength":0.980000,"VLCEnabled":true},{"luminairePositionId":71436,"id":974,"tag":"0","x1":-2.480000,"x2":-2.480000,"x3":-2.750000,"y1":-1.320000,"y2":-1.620000,"y3":-1.620000,"z":0.000000,"BLEBeaconId":0,"floorSpaceCatalog_ID":65767,"flagNotes":null,"controlGroupId":null,"externalWidth":0.870000,"externalLength":0.980000,"VLCEnabled":true}]}';
            },

            largeMap: function () {
              return '{"floorSpace":{"codeBookName":"2000 codebook","role_ID":45,"roleName":"PartnerAdmin","floorSpaceMaps":[{"mapID":498,"floorSpace_ID":24,"displayName":"bytelight","displayImageUrl":"https://abldevmapstore.blob.core.windows.net/fs24/52c4e3da-1009-437e-a1ef-745271958639%5Cmap@2x.png","tiledImageUrl":"https://abldevmapstore.blob.core.windows.net/fs24/52c4e3da-1009-437e-a1ef-745271958639%5CTiles/","imagePixelHeight":2878,"imagePixelWidth":2056,"floorSpaceLength":21.336000,"floorSpaceWidth":15.240000,"imageMetersPerPixel":0.007412,"effectiveFrom":"2017-03-22T00:00:00","effectiveTo":null,"folderName":"52c4e3da-1009-437e-a1ef-745271958639","containerName":"fs24","GTXRotation":null,"GTYRotation":null,"GTWidth":null,"GTHeight":null,"GTX":null,"GTY":null,"epsg_ID":null}],"floorSpaceID":24,"site_ID":29,"floorSpaceName":"BL1","codeBook_ID":3,"cellWidth":2.000000,"cellLength":2.000000,"floorSpaceWidth":15.239999,"floorSpaceLength":21.335999,"gridXOffset":0.000000,"gridYOffset":0.000000,"mapOffsetX":0.000000,"mapOffsetY":0.000000,"maxMountingHeight":5.000000,"coordinateConversionRule":0,"mapAngleOffsetRadians":0.000000,"hasBLEBeacons":true,"hasVLC":true,"fixtureType":null,"operatingPoint":null,"VLCEnabled":true,"floor_ID":84,"GTXRotation":0.0000067151640000000000,"GTYRotation":-0.0000046679720000000000,"GTWidth":0.0000110482610000000000,"GTHeight":0.0000077154660000000000,"GTX":-71.0475017607,"GTY":42.3501250364,"GTHeadingOffset":0.00,"GTImageOrigin":"ul","active":true},"luminaireTypes":[{"luminaireTypeID":1,"organization_ID":1,"displayName":"ESL 4x2","exteriorWidth":1.219200,"exteriorLength":0.609600,"interiorWidth":1.219200,"interiorLength":0.609600},{"luminaireTypeID":2,"organization_ID":1,"displayName":"ESL 2x4","exteriorWidth":0.609600,"exteriorLength":1.219200,"interiorWidth":0.609600,"interiorLength":1.219200},{"luminaireTypeID":3,"organization_ID":1,"displayName":"ESL 2x2","exteriorWidth":0.609600,"exteriorLength":0.609600,"interiorWidth":0.609600,"interiorLength":0.609600},{"luminaireTypeID":4,"organization_ID":1,"displayName":"BLT 4x2","exteriorWidth":1.219200,"exteriorLength":0.609600,"interiorWidth":1.219200,"interiorLength":0.203200},{"luminaireTypeID":5,"organization_ID":1,"displayName":"BLT 2x4","exteriorWidth":0.609600,"exteriorLength":1.219200,"interiorWidth":0.203200,"interiorLength":1.219200},{"luminaireTypeID":6,"organization_ID":1,"displayName":"BLT 2x2 v1","exteriorWidth":0.609600,"exteriorLength":0.609600,"interiorWidth":0.609600,"interiorLength":0.203200},{"luminaireTypeID":31,"organization_ID":1,"displayName":"VTLR 2x4","exteriorWidth":1.219200,"exteriorLength":0.609600,"interiorWidth":1.219200,"interiorLength":0.203200},{"luminaireTypeID":32,"organization_ID":1,"displayName":"TestOnly1a","exteriorWidth":0.609600,"exteriorLength":0.609400,"interiorWidth":0.600000,"interiorLength":0.609300},{"luminaireTypeID":34,"organization_ID":1,"displayName":"SLOT6 H","exteriorWidth":1.219200,"exteriorLength":0.152400,"interiorWidth":1.219200,"interiorLength":0.152400},{"luminaireTypeID":35,"organization_ID":1,"displayName":"SLOT6 V","exteriorWidth":0.152400,"exteriorLength":1.219200,"interiorWidth":0.152400,"interiorLength":1.219200},{"luminaireTypeID":63,"organization_ID":1,"displayName":"Ninja Light","exteriorWidth":1.200000,"exteriorLength":2.120000,"interiorWidth":1.100000,"interiorLength":1.300000}],"luminaireSummary":[{"luminairePositionId":73622,"id":0,"tag":"0","x1":-2.430000,"x2":-2.430000,"x3":-3.040000,"y1":-16.450000,"y2":-17.670000,"y3":-17.670000,"z":null,"BLEBeaconId":0,"floorSpaceCatalog_ID":null,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73612,"id":28,"tag":null,"x1":-7.924800,"x2":-7.924800,"x3":-8.534400,"y1":-18.897600,"y2":-20.116800,"y3":-20.116800,"z":0.000000,"BLEBeaconId":28,"floorSpaceCatalog_ID":59636,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73608,"id":1,"tag":"0","x1":-10.972800,"x2":-10.972800,"x3":-11.582400,"y1":-1.828800,"y2":-3.048000,"y3":-3.048000,"z":0.000000,"BLEBeaconId":14935134,"floorSpaceCatalog_ID":59656,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73594,"id":10,"tag":"0","x1":-13.410000,"x2":-13.410000,"x3":-14.020000,"y1":-4.870000,"y2":-6.090000,"y3":-6.090000,"z":null,"BLEBeaconId":10,"floorSpaceCatalog_ID":65520,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73601,"id":4,"tag":"0","x1":-9.753600,"x2":-9.753600,"x3":-10.363200,"y1":-4.267200,"y2":-5.486400,"y3":-5.486400,"z":0.000000,"BLEBeaconId":4,"floorSpaceCatalog_ID":65522,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73598,"id":7,"tag":"0","x1":-7.920000,"x2":-7.920000,"x3":-8.530000,"y1":-8.530000,"y2":-9.750000,"y3":-9.750000,"z":null,"BLEBeaconId":7,"floorSpaceCatalog_ID":65523,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73603,"id":9,"tag":"0","x1":-14.020000,"x2":-14.020000,"x3":-14.630000,"y1":-6.700000,"y2":-7.920000,"y3":-7.920000,"z":null,"BLEBeaconId":9,"floorSpaceCatalog_ID":65524,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73609,"id":2,"tag":null,"x1":-7.620000,"x2":-7.620000,"x3":-8.839200,"y1":-1.219200,"y2":-1.828800,"y3":-1.828800,"z":0.000000,"BLEBeaconId":2,"floorSpaceCatalog_ID":65525,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73604,"id":13,"tag":"0","x1":-11.580000,"x2":-11.580000,"x3":-12.190000,"y1":-12.190000,"y2":-13.410000,"y3":-13.410000,"z":null,"BLEBeaconId":13,"floorSpaceCatalog_ID":65526,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73593,"id":14,"tag":"0","x1":-5.480000,"x2":-5.480000,"x3":-6.090000,"y1":-10.970000,"y2":-12.190000,"y3":-12.190000,"z":null,"BLEBeaconId":14,"floorSpaceCatalog_ID":65527,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73596,"id":12,"tag":null,"x1":-1.219200,"x2":-1.219200,"x3":-1.828800,"y1":-6.705600,"y2":-7.924800,"y3":-7.924800,"z":0.000000,"BLEBeaconId":12,"floorSpaceCatalog_ID":65528,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73586,"id":20,"tag":null,"x1":-1.219200,"x2":-1.219200,"x3":-1.828800,"y1":-11.582400,"y2":-12.801600,"y3":-12.801600,"z":0.000000,"BLEBeaconId":20,"floorSpaceCatalog_ID":65529,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73589,"id":15,"tag":null,"x1":-3.048000,"x2":-3.048000,"x3":-3.657600,"y1":-9.144000,"y2":-10.363200,"y3":-10.363200,"z":0.000000,"BLEBeaconId":15,"floorSpaceCatalog_ID":65530,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73587,"id":16,"tag":null,"x1":-1.219200,"x2":-1.219200,"x3":-1.828800,"y1":-9.144000,"y2":-10.363200,"y3":-10.363200,"z":0.000000,"BLEBeaconId":16,"floorSpaceCatalog_ID":65531,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73588,"id":19,"tag":null,"x1":-3.048000,"x2":-3.048000,"x3":-3.657600,"y1":-11.582400,"y2":-12.801600,"y3":-12.801600,"z":0.000000,"BLEBeaconId":19,"floorSpaceCatalog_ID":65532,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73592,"id":18,"tag":"0","x1":-4.870000,"x2":-4.870000,"x3":-5.480000,"y1":-15.840000,"y2":-17.060000,"y3":-17.060000,"z":null,"BLEBeaconId":18,"floorSpaceCatalog_ID":65533,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73605,"id":17,"tag":"0","x1":-8.530000,"x2":-8.530000,"x3":-9.140000,"y1":-14.020000,"y2":-15.240000,"y3":-15.240000,"z":null,"BLEBeaconId":17,"floorSpaceCatalog_ID":65534,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73590,"id":11,"tag":null,"x1":-3.048000,"x2":-3.048000,"x3":-3.657600,"y1":-6.705600,"y2":-7.924800,"y3":-7.924800,"z":0.000000,"BLEBeaconId":11,"floorSpaceCatalog_ID":65617,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73606,"id":21,"tag":"0","x1":-10.970000,"x2":-10.970000,"x3":-11.580000,"y1":-7.310000,"y2":-8.530000,"y3":-8.530000,"z":null,"BLEBeaconId":21,"floorSpaceCatalog_ID":65618,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73595,"id":24,"tag":"0","x1":-5.480000,"x2":-5.480000,"x3":-6.090000,"y1":-13.410000,"y2":-14.630000,"y3":-14.630000,"z":null,"BLEBeaconId":24,"floorSpaceCatalog_ID":65619,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73610,"id":26,"tag":null,"x1":-4.876800,"x2":-4.876800,"x3":-5.486400,"y1":-18.897600,"y2":-20.116800,"y3":-20.116800,"z":0.000000,"BLEBeaconId":26,"floorSpaceCatalog_ID":65620,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73611,"id":25,"tag":null,"x1":-6.096000,"x2":-6.096000,"x3":-6.705600,"y1":-18.897600,"y2":-20.116800,"y3":-20.116800,"z":0.000000,"BLEBeaconId":25,"floorSpaceCatalog_ID":65621,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73613,"id":30,"tag":null,"x1":-9.144000,"x2":-9.144000,"x3":-9.753600,"y1":-18.897600,"y2":-20.116800,"y3":-20.116800,"z":0.000000,"BLEBeaconId":30,"floorSpaceCatalog_ID":65622,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73618,"id":29,"tag":null,"x1":-9.144000,"x2":-9.144000,"x3":-9.753600,"y1":-17.068800,"y2":-18.288000,"y3":-18.288000,"z":0.000000,"BLEBeaconId":29,"floorSpaceCatalog_ID":65623,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73614,"id":32,"tag":null,"x1":-10.363200,"x2":-10.363200,"x3":-10.972800,"y1":-18.897600,"y2":-20.116800,"y3":-20.116800,"z":0.000000,"BLEBeaconId":32,"floorSpaceCatalog_ID":65624,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73600,"id":5,"tag":null,"x1":-8.534400,"x2":-8.534400,"x3":-9.144000,"y1":-4.267200,"y2":-5.486400,"y3":-5.486400,"z":0.000000,"BLEBeaconId":5,"floorSpaceCatalog_ID":65625,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73607,"id":23,"tag":"0","x1":-13.410000,"x2":-13.410000,"x3":-14.020000,"y1":-16.450000,"y2":-17.670000,"y3":-17.670000,"z":null,"BLEBeaconId":23,"floorSpaceCatalog_ID":65626,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73597,"id":8,"tag":"0","x1":-6.700000,"x2":-6.700000,"x3":-7.310000,"y1":-8.530000,"y2":-9.750000,"y3":-9.750000,"z":null,"BLEBeaconId":8,"floorSpaceCatalog_ID":65628,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73591,"id":22,"tag":"0","x1":-12.190000,"x2":-12.190000,"x3":-12.800000,"y1":-14.620000,"y2":-15.840000,"y3":-15.840000,"z":null,"BLEBeaconId":22,"floorSpaceCatalog_ID":65630,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73617,"id":27,"tag":null,"x1":-7.924800,"x2":-7.924800,"x3":-8.534400,"y1":-17.068800,"y2":-18.288000,"y3":-18.288000,"z":0.000000,"BLEBeaconId":27,"floorSpaceCatalog_ID":65631,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73619,"id":31,"tag":null,"x1":-10.363200,"x2":-10.363200,"x3":-10.972800,"y1":-17.068800,"y2":-18.288000,"y3":-18.288000,"z":0.000000,"BLEBeaconId":31,"floorSpaceCatalog_ID":65632,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73620,"id":33,"tag":"0","x1":-1.210000,"x2":-1.210000,"x3":-1.820000,"y1":-14.020000,"y2":-15.240000,"y3":-15.240000,"z":null,"BLEBeaconId":33,"floorSpaceCatalog_ID":65633,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73615,"id":34,"tag":null,"x1":-11.582400,"x2":-11.582400,"x3":-12.192000,"y1":-18.897600,"y2":-20.116800,"y3":-20.116800,"z":0.000000,"BLEBeaconId":34,"floorSpaceCatalog_ID":65634,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73621,"id":35,"tag":"0","x1":-3.040000,"x2":-3.040000,"x3":-3.650000,"y1":-14.020000,"y2":-15.240000,"y3":-15.240000,"z":null,"BLEBeaconId":35,"floorSpaceCatalog_ID":65635,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73616,"id":36,"tag":"0","x1":-10.360000,"x2":-10.360000,"x3":-10.970000,"y1":-11.580000,"y2":-12.800000,"y3":-12.800000,"z":null,"BLEBeaconId":36,"floorSpaceCatalog_ID":65636,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73602,"id":3,"tag":"0","x1":-10.972800,"x2":-10.972800,"x3":-11.582400,"y1":-4.267200,"y2":-5.486400,"y3":-5.486400,"z":0.000000,"BLEBeaconId":3,"floorSpaceCatalog_ID":65638,"flagNotes":null,"controlGroupId":null,"externalWidth":null,"externalLength":null,"VLCEnabled":true},{"luminairePositionId":73623,"id":37,"tag":"0","x1":-10.360000,"x2":-10.360000,"x3":-10.970000,"y1":-14.630000,"y2":-15.840000,"y3":-15.840000,"z":null,"BLEBeaconId":37,"floorSpaceCatalog_ID":65639,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true},{"luminairePositionId":73599,"id":6,"tag":"0","x1":-9.140000,"x2":-9.140000,"x3":-9.750000,"y1":-8.530000,"y2":-9.750000,"y3":-9.750000,"z":null,"BLEBeaconId":6,"floorSpaceCatalog_ID":65645,"flagNotes":null,"controlGroupId":null,"externalWidth":2.000000,"externalLength":4.000000,"VLCEnabled":true}]}';
            },

            newLightsmap: function(){
                return JSON.stringify({
                    "floorSpace":{
                        "codeBookName":"1200 codebook",
                        "role_ID":36,
                        "roleName":"SuperUser",
                        "floorSpaceMaps":[

                        ],
                        "floorSpaceID":484,
                        "site_ID":6,
                        "floorSpaceName":"Foo",
                        "codeBook_ID":2,
                        "cellWidth":null,
                        "cellLength":null,
                        "floorSpaceWidth":null,
                        "floorSpaceLength":null,
                        "gridXOffset":null,
                        "gridYOffset":null,
                        "mapOffsetX":null,
                        "mapOffsetY":null,
                        "maxMountingHeight":7.000000,
                        "coordinateConversionRule":null,
                        "mapAngleOffsetRadians":null,
                        "hasBLEBeacons":false,
                        "hasVLC":false,
                        "fixtureType":null,
                        "operatingPoint":null,
                        "VLCEnabled":null,
                        "floor_ID":1,
                        "GTXRotation":null,
                        "GTYRotation":null,
                        "GTWidth":null,
                        "GTHeight":null,
                        "GTX":null,
                        "GTY":null,
                        "GTHeadingOffset":null,
                        "GTImageOrigin":"ur",
                        "active":true
                    },
                    "luminaireTypes":[
                        {
                            "luminaireTypeID":1,
                            "organization_ID":1,
                            "displayName":"ESL 4x2",
                            "exteriorWidth":1.219200,
                            "exteriorLength":0.609600,
                            "interiorWidth":1.219200,
                            "interiorLength":0.609600
                        },
                        {
                            "luminaireTypeID":2,
                            "organization_ID":1,
                            "displayName":"ESL 2x4",
                            "exteriorWidth":0.609600,
                            "exteriorLength":1.219200,
                            "interiorWidth":0.609600,
                            "interiorLength":1.219200
                        },
                        {
                            "luminaireTypeID":3,
                            "organization_ID":1,
                            "displayName":"ESL 2x2",
                            "exteriorWidth":0.609600,
                            "exteriorLength":0.609600,
                            "interiorWidth":0.609600,
                            "interiorLength":0.609600
                        },
                        {
                            "luminaireTypeID":4,
                            "organization_ID":1,
                            "displayName":"BLT 4x2",
                            "exteriorWidth":1.219200,
                            "exteriorLength":0.609600,
                            "interiorWidth":1.219200,
                            "interiorLength":0.203200
                        },
                        {
                            "luminaireTypeID":5,
                            "organization_ID":1,
                            "displayName":"BLT 2x4",
                            "exteriorWidth":0.609600,
                            "exteriorLength":1.219200,
                            "interiorWidth":0.203200,
                            "interiorLength":1.219200
                        },
                        {
                            "luminaireTypeID":6,
                            "organization_ID":1,
                            "displayName":"BLT 2x2 v1",
                            "exteriorWidth":0.609600,
                            "exteriorLength":0.609600,
                            "interiorWidth":0.609600,
                            "interiorLength":0.203200
                        },
                        {
                            "luminaireTypeID":31,
                            "organization_ID":1,
                            "displayName":"VTLR 2x4",
                            "exteriorWidth":1.219200,
                            "exteriorLength":0.609600,
                            "interiorWidth":1.219200,
                            "interiorLength":0.203200
                        },
                        {
                            "luminaireTypeID":32,
                            "organization_ID":1,
                            "displayName":"TestOnly1a",
                            "exteriorWidth":0.609600,
                            "exteriorLength":0.609400,
                            "interiorWidth":0.600000,
                            "interiorLength":0.609300
                        },
                        {
                            "luminaireTypeID":34,
                            "organization_ID":1,
                            "displayName":"SLOT6 H",
                            "exteriorWidth":1.219200,
                            "exteriorLength":0.152400,
                            "interiorWidth":1.219200,
                            "interiorLength":0.152400
                        },
                        {
                            "luminaireTypeID":35,
                            "organization_ID":1,
                            "displayName":"SLOT6 V",
                            "exteriorWidth":0.152400,
                            "exteriorLength":1.219200,
                            "interiorWidth":0.152400,
                            "interiorLength":1.219200
                        },
                        {
                            "luminaireTypeID":63,
                            "organization_ID":1,
                            "displayName":"Ninja Light",
                            "exteriorWidth":1.200000,
                            "exteriorLength":2.120000,
                            "interiorWidth":1.100000,
                            "interiorLength":1.300000
                        }
                    ],
                    "luminaireSummary":[
                        {
                            "luminairePositionId":218758,
                            "id":4,
                            "tag":null,
                            "x1":-1.42,
                            "x2":-1.42,
                            "x3":-1.65,
                            "y1":-1.82,
                            "y2":-3.04,
                            "y3":-3.04,
                            "z":0,
                            "BLEBeaconId":"9284",
                            "floorSpaceCatalog_ID":65613,
                            "flagNotes":null,
                            "controlGroupId":null,
                            "externalWidth":2,
                            "externalLength":4,
                            "VLCEnabled":false
                        }
                    ]
                });
            }
        }
    ]
};
mocks.push(getFloorSpaceMaps);

var SaveFloorSpace = {
    name: 'SaveFloorSpace',
    mockRoute: '\/api\/floorSpace$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    method:'PUT',
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            singleResult: function () {
                return JSON.stringify({
                    result:[schemas.floorSpace],
                    count: 1
                });

            }
        }
    ]
};
mocks.push(SaveFloorSpace);

exports.mocks = mocks;
// //api/floorSpace/withLightsmap/125