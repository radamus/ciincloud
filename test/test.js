var assert = require("assert");
var discountCalculator = require("../discount");




describe("discount Calculator", function(){
	it("should have discount function", function(){
		assert.equal(discountCalculator.discount instanceof Function, true, "discountCalculator.discount instanceof Function"); 		
	});
});

describe("discount function", function(){
	var rates;
	
	beforeEach(function(){
		rates = {"1000":5}
		

		});

	it("discount should be 0  ", function(){
		var amount = 999;
		var discount = discountCalculator.discount(amount, rates);
		assert.equal(discount, 0, discount + "");

	});

	it("discount should be 50,05  ", function(){
		var amount = 1001;
		var discount = discountCalculator.discount(amount, rates);
		assert.equal(discount, 50.05, discount + "");

	});
});

