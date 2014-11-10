var assert    = require('assert');
var ZingProps = require('../Properties.js');

describe('Background Family', function() {
	describe('property:  backgroundColor', function(){
		it('should pass ', function(){
			var zprops = new ZingProps();	
			var value = {key:'backgroundColor',
						value:'#fff'};
			var result = zprops.validateValue(value);
			result.should.equal(value);	
		});	
	});
});
