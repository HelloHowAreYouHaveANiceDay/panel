Template.d3f.onRendered(
		function(){
	var a = new Array();

	_.each(Forecasts.findOne().data.daily.data, function(obj){
	a.push(obj.time);
	});

	console.log('d3f loaded');

var data = a;

console.log(_.isArray(data));
console.log(data);

 });
