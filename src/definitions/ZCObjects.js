var Joi = require('joi');
var _ = require('./definitions.js');
var _under = require('underscore');



function keySet (schemas) {
	var seed = {};
	// schemas is a type array of arrays of defintions
	for (var i in schemas) {
		for (var j in schemas[i]) {
			seed = _under.extend(seed, schemas[i][j]);
		}
	}
	return seed;
}

module.exports = {
	// [ root » graph » crosshair-xy » plot-label ]
	"crosshair-x" : Joi.object().keys(
		{
			"plot-label": Joi.object().keys(keySet([
				_.alpha,
				_.background,
				_.bold,
				_.border,
				_.callout
			])),
			"scale-label": Joi.object().keys(keySet([
				_.alpha,
				_.background,
				_.bold,
				_.border,
				_.callout
			]))
		})
};

