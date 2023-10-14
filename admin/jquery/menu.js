$(document).ready(function() {
	
	var menu = 1;
	
	$("#menulogout").click(function(){
		window.location = "login.html";
	});
	
	$("#menublock").click(function(){
		
		if(menu == 1){
			console.log("menuclose");
			$("#leftmenu").animate({left: "-130"},200);
			$("#main").animate({padding: "50px 0px 0px 0px"},200);
			menu = 0;
		}else{
			console.log("menuopen");
			$("#leftmenu").animate({left: "0"},200);
			$("#main").animate({padding: "50px 0px 0px 120px"},200);
			menu = 1;
		}
	});
	
	$(".menubtncontainer").mouseenter(function(){
		$(this).animate({padding: "0px 0px 0px 5px"},200);
		//$(this).find($(".menubtn")).css("box-shadow","inset 0 0 3px 0px #654100ad");
	}).mouseleave(function(){
		$(this).animate({padding: "0px 0px 0px 0px"},200);
		//$(this).find($(".menubtn")).css("box-shadow","");
	});
	
	$("#subheaderright button").mouseenter(function(){
		$(this).css("box-shadow", "inset 0 0 5px 2px #86500187");
	}).mouseleave(function(){
		$(this).css("box-shadow", "inset 0 0 4px 0px #86500187");
	});
	
});