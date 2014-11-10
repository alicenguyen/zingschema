var Joi = require('../joi/');
var def = require('./_definitions.js');

var definitions = {
	"types": {
		"alpha": Joi.number().min(0).max(1),
		"color": Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
		"radius": Joi.string().regex(/^([0-9]+px\s+){0,3}[0-9]+px$/),
	},
	// background ---------------------------------------------
	"backgroundColor":				Joi.ref('types.color'),
	"background-color":				Joi.ref('types.color'),
	"backgroundColor1":				Joi.ref('types.color'),
	"background-color-2":			Joi.ref('types.color'),
	"backgroundColor2":				Joi.ref('types.color'),
	"backgroundFit":				Joi.string().regex(/^(x|xy|y)$/),
	"backgroundPosition":			Joi.string(),
	"backgroundRepeat":				Joi.string().regex(/(no-repeat|repeat[-]*[xy]{0,1})$/),

	// border ---------------------------------------------
	"borderColor":					Joi.ref('types.color'),
	"border-color":					Joi.ref('types.color'),
	"borderRadius":					Joi.ref('types.radius'),
	"border-radius": 				Joi.ref('types.radius'),
	"border-radius-top-left": 		Joi.ref('types.radius'),
	"border-radius-bottom-left": 	Joi.ref('types.radius'),
	"border-radius-top-right": 		Joi.ref('types.radius'),
	"border-radius-bottom-right": 	Joi.ref('types.radius')

};

/*
* Constructor
*/
function Properties() {}

/*
* Instance Methods
*/
Properties.prototype.validateValue = function(obj) {
	var schema = definitions[obj.key];
	console.log(schema);

	Joi.validate(obj.value, schema, function(err, value) {
		if(err){ console.log(err); return; }
		console.log(value);
	});

}


module.exports = Properties;

