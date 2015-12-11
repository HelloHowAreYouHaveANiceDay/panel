Meteor.methods({
	getForcast : function(){
	var forcast = HTTP.get('https://api.forecast.io/forecast/ffae42c8469ee5f004266e3aad899da5/40.7146,-74.0071');

	var forcast_id = Forcasts.insert(forcast);	
	console.log(forcast_id);
	
}



});                             
