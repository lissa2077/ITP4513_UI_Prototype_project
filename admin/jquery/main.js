$(document).ready(function() {
	
	$("#appblockbg").animate({"backgroundPosition-x": '-5000'},300000);
	
	console.log($(this).find(".mainmenublock"));
	$(".mainmenublock").mouseenter(function(){
		console.log("a");
		$(this).animate({"backgroundColor":"#ffa500",color:"#FEFCFC"},200);
		$(this).find("a").animate({color:"#FEFCFC"},200);
		$(this).css("border","1px solid #5b5858");
	}).mouseleave(function(){
		console.log("b");
		$(this).animate({"backgroundColor":"#FEFCFC",color:"#ffa500"},200);
		$(this).find("a").animate({color:"#ffa500"},200);
		$(this).css("border","1px solid #ffa500");
	});
	
	/*$("#appblockbg").mouseenter(function(){
		
		var point = $(this).css("background-position-x").replace(/-|%|px/g,"");
		console.log(point);
		point = parseFloat(point) - 25000;
		console.log(point);
		$(this).animate({"backgroundPosition": point+' 0'},300000);
	}).mouseleave(function(){
		console.log("b");
		$(this).stop();
	});*/
	
	
	$("#databuttonblock table td").mouseenter(function(){
		console.log($(this).index());
		console.log($(this).parent().parent().find("tr").eq(0).find("td").eq($(this).index()));
		$icon = $(this).parent().parent().find("tr").eq(0).find("td").eq($(this).index()).find("i").eq(0);
		$icon.animate({"font-size": "2.5em"},100);
	}).mouseleave(function(){
		$icon = $(this).parent().parent().find("tr").eq(0).find("td").eq($(this).index()).find("i").eq(0);
		$icon.animate({"font-size": "2em"},100);
	});
	
	
});