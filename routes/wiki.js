var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET add page. */
router.get('/:url', function(req, res) {

	var url = req.params.url;

	models.Page.find( { url_name: url }, function(err, pages) {
	console.log(pages);
		res.render('wiki', {
			pages: pages[0].body,
			title: 'Wikistack',
			url_name: url });
	});
});

router.get('/:url/edit', function(req, res) {

	var url = req.params.url;

  models.Page.find( { url_name: url }, function(err, pages){
  res.render('edit', { 
        newTitle: pages[0].title,
        body: pages[0].body
        // content: content
        });
	});
});


module.exports = router;