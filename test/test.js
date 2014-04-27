var assert = require("assert");
var discountCalculator = require("../discount");




describe("discount Calculator", function(){
	it("should have discount function", function(){
		assert.equal(discountCalculator.discount instanceof Function, true, "typeof discount: "  + typeof discountCalculator.discount); 		
	});
});

describe("discount function", function(){
	var singleTresholdRates;
	
	beforeEach(function(){
		singleTresholdRates = {"1000":5}		
		});

	it("discount should return 0 with no args  ", function(){		
		var discount = discountCalculator.discount();
		assert.equal(discount, 0, discount + "");

	});

	describe("when amount is lower than a single treshold ", function(){
		it("discount should be 0  ", function(){
			var amount = 999;
			var discount = discountCalculator.discount(amount, singleTresholdRates);
			assert.equal(discount, 0, discount + "");

		});
	});
	

	it("discount should be 50,05  ", function(){
		var amount = 1001;
		var discount = discountCalculator.discount(amount, singleTresholdRates);
		assert.equal(discount, 50.05, discount + "");

	});
});

