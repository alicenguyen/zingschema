var Joi = require('joi');

	var type = {
		"alpha": Joi.number().min(0).max(1),
		"color": Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
		"radius": Joi.string().regex(/^([0-9]+px\s+){0,3}[0-9]+px$/),
	};

	module.exports = {

		// alpha ----------------------------------------------------------------
		 alpha: [{"alpha": Joi.number().min(0).max(1)}],
		 angle: [{"angle": Joi.number()}],
		 bold: [{"bold": Joi.boolean()}],
		

		// background ----------------------------------------------------------------
		"background": [
			{"backgroundColor":				type.color},	
			{"background-color":			type.color},
			{"backgroundColor1":			type.color},
			{"background-color-1":			type.color},
			{"background-color-2":			type.color},
			{"backgroundColor2":			type.color},
			{"backgroundFit":				Joi.string().regex(/^(x|xy|y)$/)},
			{"backgroundPosition":			Joi.string()},
			{"backgroundRepeat":			Joi.string().regex(/(no-repeat|repeat[-]*[xy]{0},1})$/)}
		],

		// border --------------------------------------------------------------------
		"border": [
			{"borderColor":					type.color},
			{"border-color":				type.color},
			{"borderRadius":				type.radius},
			{"border-radius": 				type.radius},
			{"border-radius-top-left": 		type.radius},
			{"border-radius-bottom-left": 	type.radius},
			{"border-radius-top-right": 	type.radius},
			{"border-radius-bottom-right": 	type.radius}
		]



}
