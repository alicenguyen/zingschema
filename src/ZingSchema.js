"use strict";
var Joi = require('joi');
var zingschema = require('./lib/ZCObjects.js');

function ZingSchema() { }

ZingSchema.prototype.validate = function (code, callback ) {
	var result = Joi.validate(code, zingschema);
	if(callback) { return callback(result.error, result.value);	}

	return callback;
};



var zee = new ZingSchema();
console.log('ZingSchema npm ===============================');
zee.validate({"crosshair-x": { "plot-label": {"alpha": 0}}});
zee.validate({"foo-x": { "plot-label": {"alpha": 0}}});
console.log('===============================================');


module.exports = ZingSchema;
