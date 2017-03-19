var express = require('express');
var ejs = require('ejs');
var path = require('path');
var routes = require('./routes/route');

var app = express();

app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Server is running on port ', port);
});