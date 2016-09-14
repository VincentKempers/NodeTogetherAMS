// it grabs the express code.
var express = require('express');
var host = '127.0.0.1';
var port = '8008';

var routes = require('./app/index.js');

var app = express();

app.use(routes);

// app.<action>(<route>, function(request,response) {})
app.listen(port,host);


console.log('Puur gestuurd');
