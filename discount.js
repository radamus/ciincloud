module.exports.discount = function(amount, rates){
	amount = amount ? amount : 0;
	rates = rates ? rates : {};
	var discount = 0;
	var tresholds = Object.keys(rates);

	for(var i = 0; i < tresholds.length; i++){
		var key = tresholds[i];
		var treshold = parseInt(key);
		var discountPercentage = rates[key];
		if(amount > treshold){
			discount = Number(amount * discountPercentage * 0.01).toFixed(2);
		}
	}

	return discount;
				
}