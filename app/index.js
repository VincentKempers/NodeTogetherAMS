// index.js
var express = require('express');
var app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');

// 1.create a view engine 7-10
app.engine('handlebars', exphbs({

}))

app.get('/', function(req, res) {
  res.send(pickOne(motivations));
});

app.get('/:motivationID', function(req, res) {
  var id = req.params.motivationID;
  res.send(motivations[id]);
});




module.exports = app;
