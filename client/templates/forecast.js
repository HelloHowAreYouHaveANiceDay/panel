Template.forecast.helpers({
	forecast : function(){
		return Forecasts.find({category: Session.get('getF')},{sort:{'time':1}});
	}
});

Template.forecast.onRendered(function(){
	Session.set('getF','hourly');
});
