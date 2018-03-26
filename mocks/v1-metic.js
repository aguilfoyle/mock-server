/**
 * Created by sxd15 on 8/23/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var MetricConfigHourOfOperationBySiteID = {
    name: 'MetricConfigHourOfOperationBySiteID',
    mockRoute: '\/api\/v1\/metric-config-hour-of-operations\/site-id\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'noResults', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000',
    jsonTemplate: [{
        //legacy scenarios

        singleResult: function() {
            var hours = {
                result: [
                    schemas.metricConfigHourOfOperation
                ],
                count: 1
            };
            return JSON.stringify(hours);
        },
        multipleResults: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.metricConfigHourOfOperation)));
            }
            return JSON.stringify({
                result: result,
                count: count
            });
        },
	    noResults: function(){
		    return JSON.stringify({
			    result:[],
			    count:0
		    });
	    },

        /*
         * weekday property array values
         * 0 = SUNDAY
         * 1 = MONDAY
         * 2 = TUESDAY
         * 3 = WEDNESDAY
         * 4 = THURSDAY
         * 5 = FRIDAY
         * 6 = SATURDAY
         * */

        // new scenarios
        weekdayResult: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.metricConfigHourOfOperation)));
            }
            result[0].weekday = [1,2,3,4,5];
            return JSON.stringify({
                result: result,
                count: count
            });
        },

        weekendResult: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.metricConfigHourOfOperation)));
            }
            result[0].weekday = [0,6];
            return JSON.stringify({
                result: result,
                count: count
            });
        },

        singleDayResult: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.metricConfigHourOfOperation)));
            }
            result[0].weekday = [2]; //TUESDAY
            return JSON.stringify({
                result: result,
                count: count
            });
        },

        randomDaysResults: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                var hour = JSON.parse(JSON.stringify(schemas.metricConfigHourOfOperation));
                if (i>-1 && i<5) hour.weekday = [3];
                if (i>5 && i<10) hour.weekday = [1,4,5];
                if (i>10 && i<15) hour.weekday = [0,6];
                if (i>15 && i<20) hour.weekday = [1,2,0,6];
                if (i>20 && i<25) hour.weekday = [1,2,3,4,5];
                if (i>25 && i<31) hour.weekday = [2,3,4];
                result.push(hour);
            }
            return JSON.stringify({
                result: result,
                count: count
            });
        }

    }]
};
mocks.push(MetricConfigHourOfOperationBySiteID);

var SaveMetricConfigHourOfOperation = {
    name: 'SaveMetricConfigHourOfOperation',
    mockRoute: '\/api\/v1\/metric-config-hour-of-operations', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'PUT',
    testScenario: 'saveResult', //change this to one of hte scenario names below and restart the mock server to get new data
    jsonTemplate: [{

        saveResult: function() {
            var hours = {
                result: [
                    schemas.metricConfigHourOfOperation
                ],
                count: 1
            };
            return JSON.stringify(hours);
        }
    }]
};
mocks.push(SaveMetricConfigHourOfOperation);


var DeleteMetricConfigHourOfOperation = {
    name: 'DeleteMetricConfigHourOfOperation',
    mockRoute: '\/api\/v1\/metric-config-hour-of-operations\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    method: 'DELETE',
    testScenario: 'deleteResult', //change this to one of hte scenario names below and restart the mock server to get new data
    jsonTemplate: [{

        deleteResult: function() {
            var hours = {
                result: [
                    schemas.metricConfigHourOfOperation
                ],
                count: 1
            };
            return JSON.stringify(hours);
        }
    }]
};
mocks.push(DeleteMetricConfigHourOfOperation);

var MetricConfigBySiteID = {
	name: 'MetricConfigBySiteID',
	mockRoute: '\/api\/v1\/metric-configs\/site-id\/\\d+$',  //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
	testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
	testScenario: 'multipleResults',//change this to one of hte scenario names below and restart the mock server to get new data
	latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
	jsonTemplate: [
		{
			singleResult: function () {
				var result = [];
				result.push(schemas.metricConfig);
				return JSON.stringify({
					result: result,
					count: 1
				});
			},

			multipleResults: function () {
				var result = [];
				var count = 30;
				for (var i = 0; i < count; i++) {
					result.push(schemas.metricConfig);
				}
				return JSON.stringify({
					result:result,
					count: count
				});
			}
		},
		{
			noResults: function(){
				return JSON.stringify({
					result:[],
					count:0
				});
			}
		}
	]

};
mocks.push(MetricConfigBySiteID);

exports.mocks = mocks;





