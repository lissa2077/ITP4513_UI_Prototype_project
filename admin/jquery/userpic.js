$(document).ready(function() {
	console.log('load');
	$('#detailpic img').mouseenter(function(){
		console.log('a');
		$('#detailpiclayer').animate({opacity:'0.5'},300);
	}).mouseleave(function(){
		console.log('b');
		$('#detailpiclayer').animate({opacity:'0'},300);
	});
});