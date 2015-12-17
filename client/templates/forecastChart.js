

Template.forecastChart.helpers({
	data : function(){
		var f = Forecasts.findOne();
		return Modules.client.mapForecast(f.data.currently);
	}

});
