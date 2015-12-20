Meteor.methods({
	getForecast : function(){
		var date = moment();
	var forecast = HTTP.get(
		'https://api.forecast.io/forecast/ffae42c8469ee5f004266e3aad899da5/40.7131116,-74.01317030000001'
		);
		if(Forecasts.find().count() === 0){
			var forecast_id = Forecasts.insert(forecast);	
			console.log(forecast_id);
		}else{
			var f = Forecasts.findOne();
			console.log(f._id);
			Forecasts.update(f._id,forecast,function(error){
				if(error){
					console.log(error.reason);
			
				};
			console.log('presssed');
			});
			console.log('presssed');
		}
	}
    
});         




