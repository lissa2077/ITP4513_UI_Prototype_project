$(document).ready(function() {
	var fitter = 0;
	console.log(fitter);

	$("#searchfitter").click(function(){
		if(fitter == 0){
			$("#fitter").animate({height:"140px"},200);
			fitter = 1;
		}else{
			$("#fitter").animate({height:"0px"},200);
			fitter = 0;
		}
		console.log(fitter);
	});
});