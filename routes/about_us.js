var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

	//var url = req.params.url;

	res.render('about_us', {
		title: "About Us!"
	})

});


module.exports = router;