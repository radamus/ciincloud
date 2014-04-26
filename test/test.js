var assert = require("assert");
var discountCalculator = require("../discount");




describe("discount Calculator", function(){
	it("should have discount function", function(){
		assert.equal(discountCalculator.discount instanceof Function, true, "discountCalculator.discount instanceof Function"); 		
	});
});

describe("discount function", function(){
	it("discount should be 0% below single treshold ", function(){
		var rates = {"1000":5}
		var amount = 999;

		var discount = discountCalculator.discount(amount, rates);
		assert.equal(discount, 0, discount + "");

	});
});

