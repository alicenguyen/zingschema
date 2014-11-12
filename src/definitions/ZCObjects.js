var Joi = require('joi');
var _def = require('./definitions.js');
var _ = require('underscore');



function keySet (schemas) {
	var seed = {};

	// schemas is a type array of arrays of defintions
	for (var i in schemas) {
		for (var j in schemas[i]) {
			seed = _.extend(seed, schemas[i][j]);
		}
	}
	return seed;
}

/*
* button (for devices only)
*/
module.exports = {

	// [ root » graph » crosshair-xy » plot-label ]
	"plot-label": Joi.object().keys(keySet([_def.alpha, _def.background, _def.border]))

};

