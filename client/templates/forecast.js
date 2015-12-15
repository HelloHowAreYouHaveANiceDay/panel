Template.forecast.helpers({
	forecast : function(){
		return Forecasts.findOne();},
	getForecastDate : function(d){
		var date = new Date(d);
		return date;
	}
	
		
});
