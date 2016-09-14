// index.js
var express = require('express');
var app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');
var exphbs = require('express-handlebars');
const catImages = [1,2,3,4,5,6];

app.use(express.static('./app/public'));

// 1.create a view engine 7-10
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');



app.get('/', function(request, response) {
  var motivation = pickOne(motivations);
  var image = pickOne(catImages);
  response.render('motivation', { motivation, image });
});

// app.get('/:motivationID', function(req, res) {
//   var id = req.params.motivationID;
//   res.send(motivations[id]);
// });




module.exports = app;
