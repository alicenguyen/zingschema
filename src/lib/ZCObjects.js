var Joi = require('joi');
var _ = require('./ZCDefinitions.js');
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

	/*
	 * Context-menu Objects
	 */
	"context-menu" : Joi.object().keys(
	{
		"button": Joi.object().keys(keySet(
		[
				_.alpha,
				_.background,
				_.bold,
				_.border,
				_.callout,
				_.fill,
				_.font

		]))
	}),
	
	/*
	 * Crosshair Objects
	 */
	// [ root » graph » crosshair-xy ] -----------------
	"crosshair-x" : Joi.object().keys(
		{
			"plot-label": Joi.object().keys(keySet(
				[
					_.alpha,
					_.background,
					_.bold,
					_.border,
					_.callout,
					_.fill

				]
			)),
			"scale-label": Joi.object().keys(keySet(
				[
					_.alpha,
					_.background,
					_.bold,
					_.border,
					_.callout,
					_.fill
				]
			))
		}
	),

	"crosshair-y" : Joi.object().keys(
		{
			"plot-label": Joi.object().keys(keySet(
				[
					_.alpha,
					_.background,
					_.bold,
					_.border,
					_.callout,
					_.fill
				]
			)),
			"scale-label": Joi.object().keys(keySet(
				[
					_.alpha,
					_.background,
					_.bold,
					_.border,
					_.callout,
					_.fill
				]
			))
		}
	),

	// [root >> graph >> graph objects] -------
	"3d-aspect": Joi.object().keys(keySet(
		[
			_.angle,
			_.depth,
			_.true3d,
			_.zoom
		]
	)),

	"arrows": Joi.object().keys(keySet(
		[
			_.alpha,
			_.angle,
			_.background,
			_.border,
			_.fill
		]
	))
}; 
