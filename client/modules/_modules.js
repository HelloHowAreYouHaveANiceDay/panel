Modules.client = {};

var forecast = function() {
	var f = Forecasts.findOne();
  return f;
};



let dailyArray = () => {
	var daily = [];
  	
	for(i=0;i<forecast().data.daily.data.length;i++){
		daily[i] = forecast().data.daily.data[i];
		console.log(i);
	
	};

	return daily;
};

Modules.client.dailyArray = dailyArray;
