Meteor.methods({

	updateForecasts:function(){
		//httpget
		var forecast = HTTP.get(
		'https://api.forecast.io/forecast/ffae42c8469ee5f004266e3aad899da5/40.7131116,-74.01317030000001'
		);
	
		var insertArray = [];
		
		var currently = forecast.data.currently;
		currently.category="currently";
		insertArray.push(currently);
	
		for(i=0;i<forecast.data.daily.data.length;i++){
			var f = forecast.data.daily.data[i];
			f.category = "daily";
			insertArray.push(f);
			
		};
		for(i=0;i<forecast.data.hourly.data.length;i++){
			var f = forecast.data.hourly.data[i];
			f.category = "hourly";
			insertArray.push(f);
		};

		for(i=0;i<insertArray.length;i++){
		Forecasts.update(Forecasts.find().fetch()[i], insertArray[i]);	
			};
	
		console.log( 
				
				insertArray[0]
				
				
				);

		//sort data for currently/daily/hourly
		//insert/update
		//
	}

});
