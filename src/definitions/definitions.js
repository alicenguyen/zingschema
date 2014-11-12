var Joi = require('joi');

var type = {
	"alpha": Joi.number().min(0).max(1),
	"color": Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
	"radius": Joi.string().regex(/^([0-9]+px\s+){0,3}[0-9]+px$/),
	// "length": Joi.alternative.try(Joi.number(),  Joi.string().regex( /^(0|0px|[1-9]+[0-9]*(px){0,1})$/) )
	"length": Joi.string()
};


module.exports = {

	// alpha ----------------------------------------------------------------
	alpha: [{"alpha": Joi.number().min(0).max(1)}],
	angle: [{"angle": Joi.number()}],
	bold: [{"bold": Joi.boolean()}],
	callout: [{"callout": Joi.boolean()}],
	color: [{"color": Joi.string()}],


	// background ----------------------------------------------------------------
	background: [
		{"background-color":			type.color.allow('backgroundColor') },
		{"background-color-1":			type.color.allow('backgroundColor1') },
		{"background-color-2":			type.color.allow('backgroundColor2') },
		{"backgroundFit":				Joi.string().regex(/^(x|xy|y)$/)},
		{"backgroundPosition":			Joi.string()},
		{"backgroundRepeat":			Joi.string().regex(/(no-repeat|repeat[-]*[xy]{0},1})$/)}
	],

	// border --------------------------------------------------------------------
	border: [
		{"border-color":				type.color.allow('borderColor') },
		{"border-width": 				type.length.allow('borderWidth')},
		{"border-height": 				type.length.allow('borderHeight')},
		{"border-radius": 				type.radius.allow('borderRadius')},
		{"border-top": 					Joi.string().allow('borderTop')},
		{"border-bottom": 				Joi.string().allow('borderBottom')},
		{"border-right":				Joi.string().allow('borderRight')},
		{"border-left": 				Joi.string().allow('borderleft')},
		{"border-radius-top-left": 		type.length},
		{"border-radius-bottom-left": 	type.length},
		{"border-radius-top-right": 	type.length},
		{"border-radius-bottom-right": 	type.length}
	],

	// callout --------------------------------------------------------------------
	callout: [

		{"callout": Joi.boolean()},
		{"callout-width": type.length.allow('calloutWidth')},
		{"callout-height": type.length.allow('calloutHeight')},
		{"callout-offset":  type.length.allow('calloutOffset')},
		{"callout-position": Joi.string().regex(/(top|right|bottom|left)/)}
	],

	// fill family --------------------------------------------------------------------
	fill: [

 	]	




}
