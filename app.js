var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
 
app.get('/', function (req, res) {
	if (req.query.myTest) {
		res.send("get myTest = "+req.query.myTest);
		console.log("get myTest = "+req.query.myTest);
	}
});
 
app.listen(PORT);