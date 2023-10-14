$(document).ready(function(){

	$('.floatsubcomment').mouseenter(function(){
		$(this).animate({padding:"10px 5px"}, 100);
	}).mouseleave(function(){
		$(this).animate({padding:"10px 15px"}, 100);
	});
	
	$('#detailpiclayer img').mouseenter(function(){
		console.log('a');
		$('#detailpiclayer').animate({opacity:'0.5'},300);
	}).mouseleave(function(){
		console.log('b');
		$('#detailpiclayer').animate({opacity:'0'},300);
	});
	
});