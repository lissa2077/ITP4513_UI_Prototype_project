$(document).ready(function(){
	console.log("a");
	
	$('.suggestion').mouseenter(function(){
		console.log("b");
		var $img = $(this).find('img');
		var $headline = $(this).find('.headline');
		$(this).css('background-color','#323232');
		$img.animate({opacity:'0'}, 0,function () {
			$img.hide();
		});
		$headline.css('overflow','visible');
	}).mouseleave(function(){
		console.log("c");
		var $img = $(this).find('img');
		var $headline = $(this).find('.headline');
		$(this).css('background-color','white');
		$img.show();
		$img.animate({opacity:'1'},300);
		$headline.css('overflow','hidden');
	});
	
	$('.functionitem').mouseenter(function(){
		$(this).animate({opacity:'0.4',padding: '12px 0px'}, 100);
	}).mouseleave(function(){
		$(this).animate({opacity:'1',padding: '15px 0px'}, 100);
	});
    
    
    

	
		
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
	  spaceBetween: 30,
	  centeredSlides: true,
	  loop: true,
	  parallax: true,
	  autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	  },
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  }
	})	
	
});