var Joi = require('../joi/');
module.exports = {
	"alpha": Joi.number().min(0).max(1),
	"color": Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
	"radius": Joi.string().regex(/^([0-9]+px\s+){0,3}[0-9]+px$/)
}
