$(document).ready(function() {
	
	var fitter = 0;
	console.log(fitter);

	$("#searchfitter").click(function(){
		if(fitter == 0){
			$("#fitter").animate({height:"142px"},200);
			fitter = 1;
		}else{
			$("#fitter").animate({height:"0px"},200);
			fitter = 0;
		}
		console.log(fitter);
	});
	
	$("#userlist i").mouseenter(function(){
		$(this).animate({opacity:"0.3"},100);
	}).mouseleave(function(){
		$(this).animate({opacity:"1.0"},100);
	});
	
	$("#buttonlist button").mouseenter(function(){
		$(this).animate({opacity:"0.8"},100);
	}).mouseleave(function(){
		$(this).animate({opacity:"1.0"},100);
	});
	
	
	
});