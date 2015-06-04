var express = require('express');
var router = express.Router();
var models = require('../models/');
// var wiki = require('./wiki');

/* GET home page. */
router.get('/', function(req, res) {

	models.Page.find({}, function(err, pages) {
		console.log(pages);
		res.render('index', {
			docs: pages ,
			title: 'Wikistack' });
	});
});


module.exports = router;
