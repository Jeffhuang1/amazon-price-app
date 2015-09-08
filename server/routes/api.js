var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/item', function(req, res, next) {
	if(true){
	//if (req.body.item_data) {		
		var util = require('util'),
		    OperationHelper = require('apac').OperationHelper;

		var opHelper = new OperationHelper({
		    awsId:     'AKIAJXCGHWHBV54VWLOA',
		    awsSecret: '',
		    assocId:   'amazonsto092f-20',
		    endPoint:  'ecs.amazonaws.ca',
		    // xml2jsOptions: an extra, optional, parameter for if you want to pass additional options for the xml2js module. (see https://github.com/Leonidas-from-XIV/node-xml2js#options)
		    version:   '2013-08-01'
		    // your version of using product advertising api, default: 2013-08-01
		});


		// execute(operation, params, callback)
		// operation: select from http://docs.aws.amazon.com/AWSECommerceService/latest/DG/SummaryofA2SOperations.html
		// params: parameters for operation (optional)
		// callback(err, parsed, raw): callback function handling results. err = potential errors raised from xml2js.parseString() or http.request(). parsed = xml2js parsed response. raw = raw xml response.

		opHelper.execute('ItemLookup', {
		  'ItemId': 'B00ZDNNRB8',
		  'ResponseGroup': 'Offers'
		}, function(err, results) { // you can add a third parameter for the raw xml response, "results" here are currently parsed using xml2js
		    console.log(results);
		    res.json({
		    	success:true,
		    	message: results
		    })
		});
	}
	else {
		res.json({
	        success: false,
	        message: 'Please, pass location data'
	    });
	}
});

module.exports = router;
