var express = require('express');
var router = express.Router();
var flightdata = require('../data/data.json');


// var request = new XMLHttpRequest();
//    request.open("GET", "../data/data.json", false);
//    request.send(null)
// var my_JSON_object = JSON.parse(request.responseText);
//    alert (my_JSON_object.result[0]);


// var flight = require('../flight');

// var flight1 = flight({
// 	number: 1,
// 	airline: 'SWA',
// 	origin: 'PDX',
// 	destination: 'AUS'
	
// });

// var flight2 = flight({
// 	number: 2,
// 	airline: 'AA',
// 	origin: 'LGA',
// 	destination: 'MIA'
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
   title: 'What is up there?',
   mysearch: flightdata
   } );
});

module.exports = router;
