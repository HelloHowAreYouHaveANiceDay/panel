Template.forecast.helpers({
	forecast : function(){
		return Forecasts.find();
	}
});

Template.forecast.onRendered(function(){
	Session.set('getF','hourly');
});
