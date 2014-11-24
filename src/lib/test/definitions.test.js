var Joi = require('joi');
var ZCSchema = require('../ZCDefinitions.js');
var chai = require('chai');
var should = chai.should();

var string = function (obj) {
	return JSON.stringify(obj,null,4);
}


describe("Should pass", function () {

	var value =  { "callout-width": 98 };
	var schema = ZCSchema.callout;

	it(string(value), function() {
		Joi.validate(value, schema, function(err, valid) {
			should.not.exist(err);	
		});
	});

});

describe("Should pass", function () {

	var value =  { "callout-width": 98 };
	var schema = ZCSchema.callout;

	it(string(value), function() {
		Joi.validate(value, schema, function(err, valid) {
			should.not.exist(err);	
		});
	});

});



