var discountCalculator = require("./discount");

var amount = Number(parseFloat(process.argv[2])).toFixed(2);
console.log("amount = " + amount);
var discount = discountCalculator.discount(amount, {"100":5, "200":10});

console.log("discount = " + discount);