var Joi = require('joi');

var type = {
	"alpha": Joi.number().min(0).max(1),
	"angle": Joi.number().min(0).max(90),
	"color": Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
	"radius": Joi.string().regex(/^([0-9]+px\s+){0,3}[0-9]+px$/),
	"length": Joi.alternatives().try(Joi.number(),  Joi.string().regex( /^(0|0px|[1-9]+[0-9]*(px){0,1})$/)),
	"length": Joi.string().regex(/^([0-9]+px\s+){0,3}[0-9]+px$/),
	"fontFamily": Joi.string(),
	"fontSize": Joi.string(),
	"fontStyle": Joi.string().regex(/(normal|italic|oblique|initial|inherit)/),
	"fontWeight": Joi.alternatives().try(Joi.string().regex(/(normal|bold|bolder|lighter|initial|inherit)/), Joi.number().allow(100, 200, 300, 400, 500, 600, 700, 800, 900))
};


module.exports = {

	// alpha ----------------------------------------------------------------
	alpha: [{"alpha": Joi.number().min(0).max(1)}],
	angle: [
		{"angle": 	Joi.number().min(0).max(90)},
		{"angle-x": Joi.number().min(0).max(90)},
		{"angleX": 	Joi.number().min(0).max(90)},
		{"angle-y": Joi.number().min(0).max(90)},
		{"angleY": 	Joi.number().min(0).max(90)},
		{"angle-z": Joi.number().min(0).max(90)},
		{"angleZ": 	Joi.number().min(0).max(90)}
	],

	bold: [{"bold": Joi.boolean()}],
	callout: [{"callout": Joi.boolean()}],
	color: [{"color": Joi.string()}],


	// background ----------------------------------------------------------------
	background: [
		{"background-color":			type.color },
		{"backgroundColor":			type.color },
		{"background-color-1":			type.color},
		{"backgroundColor1":			type.color},
		{"background-color-2":			type.color},
		{"backgroundColor2":			type.color},
		{"backgroundFit":				Joi.string().regex(/^(x|xy|y)$/)},
		{"backgroundPosition":			Joi.string()},
		{"backgroundRepeat":			Joi.string().regex(/(no-repeat|repeat[-]*[xy]{0},1})$/)}
	],

	// border --------------------------------------------------------------------
	border: [
		{"border-color":					type.color},
		{"borderColor":					type.color},
		{"border-width": 				type.length},
		{"borderWidth": 				type.length},
		{"border-height": 				type.length},
		{"borderHeight": 				type.length},
		{"border-radius": 				type.radius},
		{"borderRadius": 				type.radius},
		{"border-top": 					Joi.string()},
		{"borderTop": 					Joi.string()},
		{"border-bottom": 				Joi.string()},
		{"borderBottom": 				Joi.string()},
		{"border-right":				Joi.string()},
		{"borderRight":					Joi.string()},
		{"border-left": 				Joi.string()},
		{"borderLeft": 					Joi.string()},
		{"border-radius-top-left": 		type.length},
		{"borderRadiusBottomLeft": 		type.length},
		{"border-radius-top-right": 	type.length},
		{"borderRadiusBottomRight": 	type.length}
	],

	// callout --------------------------------------------------------------------
	callout: [

		{"callout": 			Joi.boolean()},
		{"callout-width": 		type.length.allow('calloutWidth')},
		{"callout-height": 		type.length.allow('calloutHeight')},
		{"callout-offset":  	type.length.allow('calloutOffset')},
		{"callout-position": 	Joi.string().regex(/(top|right|bottom|left)/)}
	],

	depth: [{"depth": Joi.number()}],


	// fill family --------------------------------------------------------------------
	fill: [
		{"fill-angle":  	Joi.number().description("Sets the angle of the axis along which the linear gradient is drawn.") },
		{"fillAngle":  	Joi.number().description("Sets the angle of the axis along which the linear gradient is drawn.") },
		{"fill-offset-x":  	type.length.description("Sets an X offset to apply to the fill.") },
		{"fillOffsetX":  	type.length.description("Sets an X offset to apply to the fill.") },
		{"fill-offset-y":  	type.length.description("Sets an Y offset to apply to the fill.") },
		{"fillOffsetY":  	type.length.description("Sets an Y offset to apply to the fill.") },
		{"fill-type":  		Joi.string().regex(/(linear|radial)/).description("Sets the background gradient fill type to either linear or radial.") },
		{"fillType":  		Joi.string().regex(/(linear|radial)/).description("Sets the background gradient fill type to either linear or radial.") }
	], 

	font: [
		{"font-angle": type.angle}, 
		{"fontAngle": type.angle},
		{"font-color": type.color},
		{"fontColor": type.color},
		{"font-family": type.fontFamily},
		{"fontFamily": type.fontFamily},
		{"font-size": type.fontSize},
		{"fontSize": type.fontSize},
		{"font-style": type.fontStyle},
		{"fontStyle": type.fontStyle},
		{"font-weight": type.fontWeight},
		{"fontWeight": type.fontWeight}
	],

	true3d: [{"true3d": Joi.boolean()}],

	zoom: [{"zoom":  Joi.number()}]

};
