var assert = require("assert");
var discountCalculator = require("../discount");




describe("discount Calculator", function(){
	it("should have discount function", function(){
		assert.equal(discountCalculator.discount instanceof Function, true, "discountCalculator.discount instanceof Function"); 		
	});
});

describe("discount function", function(){
	var rates;
	var amount;
	beforeEach(function(){
		rates = {"1000":5}
		amount = 999;

		});

	it("discount should be 0 below single treshold ", function(){
		
		var discount = discountCalculator.discount(amount, rates);
		assert.equal(discount, 0, discount + "");

	});
});

