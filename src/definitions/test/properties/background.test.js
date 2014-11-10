var assert    = require('assert'); var ZingProps = require('../../Properties.js');
var should  = require('should');
var keys = {
	valid: [
		'backgroundColor',
		'background-color',
		'backgroundColor1',
		'background-color-1',
		'background-color-2',
		'backgroundColor2',
		'backgroundFit',
		'backgroundPosition',
		'backgroundRepeat'
	],
	invalid: [
		'backGroundColor', 
		'backgroundcolor',
		'BackgroundColor',
		'bakcgrundcolor',
		true,	
		9,
		{'backgroundColor':null},
		'backgroundfit',
		'backgroundPosddsition',
		'background--Repeat'
	]
};

var values = {
	colors: {
		valid: [
			'#FFFFFF',
			'#FFF',
			'#ffffff',
			'#ff',
			'#CC6666',
			'#FF0000',
			'#0dc4e0',
			'#ffdb00',
			'rgb(255,0,0)',
			'red',
			'#F00',
			'#FF0000'
		],

		invalid: [
			'#zzz',
			'fff',
			'#fffffffff',
			'#F-ffff',
			'chicken',
			'#chicken',
			'rgb(256,256,256)',
			'#ffz999'
		]
	}
};
describe('Background Family', function() {

	describe('Schema should pass valid keys:  ', function(){
		for(var i in keys.valid) {
			it(keys.valid[i], function(){
				var zprops = new ZingProps();	
				zprops.validateKey(keys.valid[i]).should.equal.true;
			});
		}
	});

	describe('Schema should catch invalid keys:  ', function(){
		for(var i in keys.invalid) {
			it(keys.invalid[i], function(){
				var zprops = new ZingProps();	
				zprops.validateKey(keys.invalid[i]).should.equal.false;
			});
		}
	});


	describe('Validator should pass valid color values', function() {

		// backgroundColor
		for(var i in values.colors.valid) {
			var color = values.colors.valid[i]
			it( color, function() {
				var zprops = new ZingProps();
				var res = zprops.validateColor(color);
				res.isValid.should.equal.true;
				res.message.should.equal(color + ' is valid');
			});
		}
	});
	describe('Validator should catch invalid color values', function() {

		// backgroundColor
		for(var i in values.colors.invalid) {
			var color = values.colors.invalid[i]
			it( color, function() {
				var zprops = new ZingProps();
				var res = zprops.validateColor(color);
				res.isValid.should.equal.false;
			});
		}
	});
});
