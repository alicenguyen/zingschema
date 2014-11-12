var Joi = require('joi');
var schema = require('../ZCObjects.js');
var chai = require('chai');
var should = chai.should();

var string = function (obj) {
	return JSON.stringify(obj);
}


describe("Should fail", function () {
	var value =  { "cat": {} } ;
	it(string(value), function() {
		Joi.validate(value, schema, function(err, valid) {
			should.exist(err);	
		});
	});
});

describe("crosshair-test cases ", function () {
	var values = {
		good: [
			{"plot-label": {"alpha": 0} },
			{"plot-label": {"alpha": 0, "backgroundRepeat": 'no-repeat'} }
		],

		bad:[
			{ "plot-label": {"alpha": 0, "foo": true} },
			{ "plot-label": {"alpha": 99999} }
		]
	};

	describe("Values should pass: ", function() {
		for (var i in values.good) {
			it(string(values.good[i]), function() {
				Joi.validate(values.good[i], schema, function(err, valid) {
					should.not.exist(err);	
				});
			});
		}

	});

	describe("Values should fail: ", function() {
		for (var i in values.bad) {
			it(string(values.bad[i]), function() {
				Joi.validate(values.bad[i], schema, function(err, valid) {
					should.exist(err);	
				});
			});
		}

	});


});
