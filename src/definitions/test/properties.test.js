var assert    = require('assert'); var ZingProps = require('../Properties.js');
var should  = require('should');

describe('Background Family', function() {

	describe('Schema should pass valid keys:  ', function(){
			var keys = [
				'backgroundColor',
				'background-color',
				'backgroundColor1',
				'background-color-1',
				'background-color-2',
				'backgroundColor2',
				'backgroundFit',
				'backgroundPosition',
				'backgroundRepeat'
			];
		for(var i in keys) {
			it(keys[i], function(){
					var zprops = new ZingProps();	
					zprops.validateKey(keys[i]).should.equal.true;
			});
		}
	});

	describe('Schema should catch invalid keys:  ', function(){
		var keys = [
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
		];

		for(var i in keys) {
			it(keys[i], function(){
					var zprops = new ZingProps();	
					zprops.validateKey(keys[i]).should.equal.false;
			});
		}
	});
});
