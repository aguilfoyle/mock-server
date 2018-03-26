var express = require('express'),
        bodyParser = require('body-parser'),
        mockApi = require('mock-json-api'),
        fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.cert', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var app = express();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var mockRoutes = [];
var mocks = fs.readdirSync(__dirname + '/mocks'); // jshint ignore:line
var schemas = require('./schemas/schemas');

for (var i in mocks) {
    var mock = mocks[i];
    console.log(mock);
    var template = require(__dirname + '/mocks/' + mock);// jshint ignore:line
    for (var ii in template.mocks) {
        console.log('\t' + (template.mocks[ii].method ? template.mocks[ii].method : 'GET') + " "+ template.mocks[ii].name + ": " + template.mocks[ii].mockRoute);
        mockRoutes.push(template.mocks[ii]);
    }
}

var store = '/store.json';
var mockapi = mockApi({
    jsonStore: __dirname + store,
    mockRoutes: mockRoutes
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, atr-entity-key");
    next();
});
app.use("/images", express.static(__dirname + '/images'));

app.post('/mock/setRouteScenario', mockapi.setRouteScenario);

app.get('/schemas/wellKnown', function (req, res) {
    res.send(schemas.wellKnown);
    res.end();
});

app.get('/stop', function (req, res) {
    res.send('closing..');
    process.exit(0);
});

app.use(function(req, res, next) {

    /*
    * The purpose of this code is to test the Admin application is boot-strapping the API properly
    * If not, the mock server should throw a 500 error with an error reason
    * */
/*
    var found = false;
    //todo: integrate these keys with the wellKnown schema in schemas/schemas.js
    var wellKnownKeys = [
        'PRT-7e957fcf-ddb5-420f-b267-4866cf300c19',
        'PRT-f9598d98-3eb5-44d0-9dd7-3b8dcb29160e',
        'PRT-9124a3ef-1377-484b-9331-cc88c861ba4e',
        'ORG-9b29b827-f860-4aa8-bf24-90b487523384'
    ];

    var isImage =  req.path.indexOf('images') != -1 || req.path.indexOf('favicon.ico') != -1;

    if (!isImage) {
        if (req.method != 'OPTIONS') {
            if (req.path == '/api/v1/partners/entities-and-environments' && req.headers['atr-entity-key']) {
                found = true;
                res.status(500).send({error: 'should NOT send key atr-entity-key via the header'});
                res.end();
            }
            if (req.path == '/api/v1/organizations/with-addresses' && req.headers['atr-entity-key']) {
                if (wellKnownKeys.indexOf(req.headers['atr-entity-key']) == -1) {
                    found = true;
                    res.status(500).send({error: 'atr-entity-key contains the wrong value it should be one of the well known keys'});
                    res.end();
                }
            }
            if (req.path != '/api/v1/partners/entities-and-environments' && req.path != '/api/v1/organizations/with-addresses') {
                if (req.headers['atr-entity-key']) {
                    if (wellKnownKeys.indexOf(req.headers['atr-entity-key']) == -1) {
                        found = true;
                        res.status(500).send({error: 'atr-entity-key contains the wrong value it should be one of the well known keys'});
                        res.end();
                    }
                } else {
                    found = true;
                    res.status(500).send({error: 'Missing atr-entity-key in the header'});
                    res.end();
                }
            }
        }
    }

    if (found) {
        res.status(500).send({error: 'atr-entity-key error'});
        res.end();
    }

    if (!found) { */
        next();
/*
    }
*/

});


app.use(mockapi.registerRoutes);
    //some other code
var myRole = schemas.currentRole;
// output role to console
switch (myRole) {
    case 33:
        displayRole = "Commissioner";
        break;
    case 35:
        displayRole = "Admin";
        break;
    case 36:
        displayRole = "Super User";
        break;
    case 37:
        displayRole = "Read Only";
        break;
    case 45:
        displayRole = "Partner Admin";
        break;
}
console.log('\x1b[32m', `Your current role is ${displayRole}` ,'\x1b[0m');

//Listen via http & https
httpServer.listen(3000);
httpsServer.listen(3443);