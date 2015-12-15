
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

let getDaily = (p) =>{
	var array = dailyArray;
	var resultArray = [];
	_.each(dailyArray, function(e){return e(p);});
};

Modules.client.dailyArray = dailyArray;
