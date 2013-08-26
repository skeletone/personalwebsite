jQuery(document).ready(function(){
	var bounce = [0.1, 0.3, 0.5, 0.7, 0.9];
	var headername=	d3.select(".name").select("text");

    headername
	  .data(bounce)
	  .on("mouseover",function(d){
	  	  d3.select(this)
	  	    .attr("y","110")
			.transition()
			.duration(1000)
			.delay(0)
			.ease('bounce', d)
			.attr('transform','translate(0,20)');
	  })
	  .on("mouseout", function(d){
	  	d3.select(this)
	  	  .attr("y","130")
	  	  .attr('transform', null);
	  });

	  headername.on("click", function(){
	  	d3.event.preventDefault();
	  	$(".intro").slideToggle('fast');
	  });

});