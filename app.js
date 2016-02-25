/*eslint-env node*/

//Application uses express as its web server
var express = require('express');

//cfenv provides access to Cloud Foundry environment
var cfenv = require('cfenv');

//create a new express server
var app = express();

//serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use("/public", express.static(__dirname + '/public'));

//serve the node modules
app.use("/node_modules", express.static(__dirname + '/node_modules'));

//get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

//start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {

    //print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
