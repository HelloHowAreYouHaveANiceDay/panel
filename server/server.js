Meteor.methods({
	getForecast : function(){
	var forecast = HTTP.get('https://api.forecast.io/forecast/ffae42c8469ee5f004266e3aad899da5/40.7146,-74.0071');

	var forecast_id = Forecasts.insert(forecast);	
	console.log(forecast_id);
}



});                             
