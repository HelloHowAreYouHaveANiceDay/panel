Template.d3f.onRendered(function(){
	

	var svg, width = 500, height = 75, x;

    svg = d3.select('.chart').append('svg')
      .attr('width', width)
      .attr('height', height);

    var drawCircles = function (update) {
      var data = Modules.client.getTime();
      var circles = svg.selectAll('circle').data(data);
      if (!update) {
        circles = circles.enter().append('circle')
          .attr('cx', function (d, i) { return x(i); })
          .attr('cy', height / 2);
      } else {
        circles = circles.transition().duration(1000);
      }
      circles.attr('r', function (d) { return d; });
  
    };
	
 });
