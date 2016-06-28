// More Routes
// =============================================================

app.get('/friends', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/friends.js.'));
})