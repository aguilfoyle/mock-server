/**
 * Created by sxd15 on 4/10/2017.
 */

var http = require('http');

var opts = {
    host : 'localhost',
    port : 3000,
    path : '/stop',
    method : 'GET'
};

var req = http.request(opts, function(res) {
    console.log("shutdown statusCode: ", res.statusCode);
});

req.on('error', function(e) {
    console.log('req error: ', e.message);
});

req.end();