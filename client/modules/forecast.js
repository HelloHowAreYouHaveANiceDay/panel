let getTime = () => {
	var f =	Forecasts.find({category: Session.get('getF')},{sort:{'time':1}}).fetch();
	var fa = []
	for (i=0;i < f.length;i++){
	 fa.push(f[i].temperature)
	}
	return fa;
};

Modules.client.getTime = getTime

