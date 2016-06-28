// Routes
// =============================================================

app.get('/survey', function(req, res){
	//res.send("You have navigated to the survey page.")
	res.sendFile(path.join(__dirname + '/survey.html'));
})

app.get('/', function(req, res){
	//res.send("You have navigated to the home page.")
	res.sendFile(path.join(__dirname + '/home.html'));
})