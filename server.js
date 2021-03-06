// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 80;


// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// Check to see if you can hear anything
// ===============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
	console.log("Get ready to find your match...");
})