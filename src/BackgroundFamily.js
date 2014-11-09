var Joi = require('./joi/');
var def = require('./Definitions.js');

module.exports = {
	"backgroundColor":	 	def.color(),
	"background-color": 	def.color(),
	"backgroundColor1": 	def.color(),
	"background-color-2": def.color(),
	"backgroundColor2": def.color(),
	"backgroundFit":  Joi.string().regex(/^(x|xy|y)$/),
	"backgroundPosition": Joi.string(),
	"backgroundRepeat":		Joi.string().regex(/(no-repeat|repeat[-]*[xy]{0,1})$/)
};

