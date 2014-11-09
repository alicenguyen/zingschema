var Joi = require('./joi/');
module.exports = {
	"alpha": function() { 
		return Joi.number().min(0).max(1); 
	},
	"color": function() { 
		return  Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/); 
	}
}
