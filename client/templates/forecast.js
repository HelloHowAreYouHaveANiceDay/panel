Template.forecast.helpers({
	forecast : function(){
		return Forecasts.findOne();},

	selectF : function(){
		return Forecasts.findOne().data[Session.get('getF')].data;
	}

});
