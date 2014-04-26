module.exports.discount = function(amount, rates){
	var discount = 0;
	var tresholds = Object.keys(rates);

	for(var i = 0; i < tresholds.length; i++){
		var key = tresholds[i];
		var treshold = parseInt(key);
		var discountPercentage = rates[key];
		if(amount > treshold){
			discount = amount * discountPercentage * 0.01;
		}
	}

	return discount;
				
}