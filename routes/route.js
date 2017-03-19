var express = require('express');

var router = express.Router();

module.exports.home =  function(req, res){
	res.render('home', {headline: 'We belive that every city have something to say!', title: "Home"});
};

/* http://localhost:8080/NewYork */
module.exports.city = function(req, res) {
	console.log(req.params);
	
	var city = req.params.city;
	var title, headline;
	var imageCount = 4;

	if(city == 'berlin'){
		title = "Berline";
		headline = 'Berline is a nice City';
	}

	if(city == 'newyork'){
		title = "New York";
		headline = 'New York is a nice City';
		imageCount = 2;
	}

	res.render('city', {city: city, title: title, headline: headline, numberOfImages: imageCount}); //render(templatename, data);
}