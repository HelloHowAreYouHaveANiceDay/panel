Modules.client = {};

let forcast = () => {
  return Forcasts.findOne();
};

var daily = [];

let summary = () => {
  	for(i=0;i<forcast().daily.data.length;i++){
		daily[i] = forcast.data.daily.data[i].summary;
		console.log(daily[i]);
	}
};

Modules.client.summary = summary;
Modules.client.forcast = forcast;
Modules.client.daily = daily;
