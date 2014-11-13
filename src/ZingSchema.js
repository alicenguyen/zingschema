"use strict";
var Joi = require('joi');
var zingschema = require('./lib/ZCObjects.js');

function ZingSchema() { }

ZingSchema.prototype.validate = function (code) {
	Joi.validate(code, zingschema, function (err, res) {
		if (err) {
			console.log(err);
			return err;
		}
		console.log('success.');
	});
};



// var zee = new ZingSchema();

// zee.validate({"crosshair-x": { "plot-label": {"alpha": 0}}});
// zee.validate({"poop-x": { "plot-label": {"alpha": 0}}});


module.exports = ZingSchema;
