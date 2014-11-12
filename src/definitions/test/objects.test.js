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

		var v1 = { "plot-label": {"alpha": 0} };
		it("sould pass with " + string(v1), function() {
			Joi.validate(v1, schema, function(err, valid) {
				should.not.exist(err);	
			});
		});

		var v2 = { "plot-label": {"alpha": 99999} };
		it("sould fail with " + string(v2) , function() {
			Joi.validate(v2, schema, function(err, valid) {
				should.exist(err);	
			});
		});


		var v3 = { "plot-label": {"alpha": 0, "foo": true} };
		it("sould fail with " + string(v3) , function() {
			Joi.validate(v3, schema, function(err, valid) {
				should.exist(err);	
			});
		});
		
	});
