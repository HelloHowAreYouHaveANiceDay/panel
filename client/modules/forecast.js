

let forecast = () => {
	var f = Forecasts.findOne();
  return f;
};


let forecastArray = () => {
	var a = new Array()

	_.each(forecast().data.daily.data, function(obj){
	a.push(obj.time);
	});

	return a;
};



//Modules.client.dailyArray = dailyArray;
Modules.client.forecast = forecastArray;
