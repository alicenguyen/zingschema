var Joi = require('joi');
var _ = require('./definitions.js');
var merge = require('json-premerge');



function keySet (schemas) {
	var seed = [];

	// schemas is a type array of arrays of defintions
	for(var i in schemas) {
		
		if(schemas[i].length > 1) {
			for (var j in schemas[i] ) {
				seed.push(schemas[i][j]);	
			}
		}
		
		else {
			seed.push(schemas[i][0]);
		}
	}

	console.log(seed);
	return seed;
}

/*
* button (for devices only)
*/
module.exports = {

	// [ root » graph » crosshair-xy » plot-label ]
	"plot-label": keySet([_.alpha, _.background, _.border])

};

