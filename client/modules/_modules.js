Modules.client = {};

var forcast = function() {
	var f = Forcasts.findOne();
  return f;
};



let summary = () => {
	var daily = [];
  	for(i=0;i<forcast().data.daily.data.length;i++){
		daily[i] = forcast().data.daily.data[i];
		console.log(i);
	
	}
	return daily;
};

Modules.client.summary = summary;
Modules.client.forcast = forcast;
Modules.client.daily = daily;
