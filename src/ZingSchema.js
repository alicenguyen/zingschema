"use strict";
var Joi = require('joi');
var zingschema = require('./lib/ZCObjects.js');

function ZingSchema() { 
console.log('ZingSchema instance');
}

ZingSchema.prototype.validate = function (code, callback ) {
	console.log('validating...');
	var result = Joi.validate(code, zingschema, {abortEarly:false});
	if(callback) { return callback(result.error, result.value);	}

	return result;
};

module.exports = ZingSchema;

