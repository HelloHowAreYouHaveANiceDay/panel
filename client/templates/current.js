Template.currentForecast.helpers({
	getForecastDate : function(t){
		var d = Modules.client.convertTime(t);
		console.log(this.time);
		return d;
	}
	});
