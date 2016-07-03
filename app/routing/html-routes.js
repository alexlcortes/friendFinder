var path = ('path');
// Routes
// =============================================================

module.exports = function(app) {

 
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/survey.html'));
	})

	app.get('/friends', function(req, res){
		//res.send("You have navigated to the home page.")
		res.sendFile(path.join(__dirname + '/friends.html'));
	})
};