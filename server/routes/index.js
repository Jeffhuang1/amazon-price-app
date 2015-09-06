var express = require('express'),
	router 	= express.Router();

/**
 * Default (index) path request handler.
 */
router.get('/', function(req, res, next) {
    res.sendfile('index.html');
});

module.exports = router;