$(document).ready(function(){
	
	var menuopen = 0;
	
	$("#menubtn").click(function(){
		if(menuopen == 0){
			$("#left_menu").css("display","block");
			$("#left_menu").animate({left: '45%'});
			$('#searchlayer').animate({opacity:'0.7'},500);
			$('#searchlayer').css("display","block");
			menuopen = 1;
		}else{
			$("#left_menu").animate({left: '-45%'});
			$('#searchlayer').animate({opacity:'0'},500);
			$('#searchlayer').css("display","none");
			menuopen = 0;
		}
	}).mouseenter(function(){
		console.log('1');
		$(this).css('transition','all 400ms');
		$(this).animate({},function(){
		
		$(this).css('transform', 'rotate(90deg)');
		});
	}).mouseleave(function(){
		console.log('2');
		$(this).css('transition','all 300ms');
		$(this).animate({},function(){
		
		$(this).css('transform', 'rotate(0deg)');
		});
	});
	
	$("#backbtn").click(function(){
		$("#left_menu").animate({left: '-45%'});
		$('#searchlayer').animate({opacity:'0'},100);
		menuopen = 0;
	});
	
	$("#searchbtn").click(function(){
		console.log("input:"+ $("#searchbox").val());
		var keyword = $("#searchbox").val();
		console.log(keyword);
		window.location.replace("searchresult.html?keyword="+keyword);
	}).mouseenter(function(){
		console.log('1');
		$(this).css('transition','all 400ms');
		$(this).animate({},function(){
		
		$(this).css('transform', 'rotate(134deg)');
		});
	}).mouseleave(function(){
		console.log('2');
		$(this).css('transition','all 300ms');
		$(this).animate({},function(){
		
		$(this).css('transform', 'rotate(0deg)');
		});
	});

	
	$('.leftmenubtn').click(function(){
		var pic = $(this).find($('img')).attr('src');
		console.log(pic);
		pic = pic.split('/')[1].split('.')[0];
		console.log(pic);
		switch(pic){
			case "home":
				window.location.replace("index.html");
			break;
			case "user":
			case "star":
			case "alarm":
				window.location.replace("profile.html");
				break;
			case "hold":
				window.location.replace("about.html");
			break;
			case "login1":
				window.location.replace("login.html");
			break;
		}
	});
	
	$('.leftmenubtn').mouseenter(function(){
		$(this).animate({padding: '10px 10px 10px 25%'}, 200);
	}).mouseleave(function(){
		$(this).animate({padding: '10px'}, 100);
	});
	
	$('#backbtn').mouseenter(function(){
		$(this).animate({padding: '10px 10px 10px 15%'}, 300);
	}).mouseleave(function(){
		$(this).animate({padding: '10px'}, 100);
	});

    $('#searchbox').focusin(function(){
		$('#searchlayer').animate({opacity:'0.7'},100);
		$('#searchlayer').css("display","block");
		$("#left_menu").animate({left: '-45%'},100);
		menuopen = 0;
	}).focusout(function(){
		$('#searchlayer').animate({opacity:'0'},100);
		$('#searchlayer').css("display","none");
		
	});
	
	$('#searchlayer').click(function(){
		$('#searchlayer').animate({opacity:'0'},100);
		if(menuopen == 0){
			$("#left_menu").css("display","block");
			$("#left_menu").animate({left: '45%'});
			menuopen = 1;
		}else{
			$("#left_menu").animate({left: '-45%'});
			menuopen = 0;
		}
		$('#searchlayer').css("display","none");
	});
    
	
});