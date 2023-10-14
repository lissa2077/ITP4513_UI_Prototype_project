$(document).ready(function(){
	
	var urlParams = parseURLParams(window.location.href);
	if(urlParams == null){
		$('#restid').val(1);
		var restid = 1;
	}else{
		$('#restid').val(urlParams["restid"]);
		var restid = parseInt($('#restid').val()) - 1;
	}
    
    //order,[name,[name,price,pic]]
    var menudb = [
		["Halloween",
			["Cheese Pumpkins","$231","images/menu/menu1.jpg"],
			["Jack-o'-Lantern Pot Pies","$97","images/menu/menu2.jpg"]],
        ["Hot",
			["Chef’s Soup","$131","images/menu/menu3.jpg"],
			["Prawn Cocktail","$53","images/menu/menu4.jpg"],
			["Smoked Salmon","$74","images/menu/menu5.jpg"],
			["Fresh Seasonal Oysters","$231","images/menu/menu6.jpg"],
            ["Fresh Seasonal Oysters","$31","images/menu/menu6.jpg"],
            ["Fresh Seasonal Oysters",23,"images/menu/menu6.jpg"],
            ["Fresh Seasonal Oysters",231,"images/menu/menu6.jpg"],
            ["Fresh Seasonal Oysters",201,"images/menu/menu6.jpg"]],
        ["breakfast",
			["Fried chicken and Waffle",231,"images/menu/menu1.jpg"],
			["Bissell Breakfast",220,"images/menu/menu2.jpg"],
			["Breakfast Pie",661,"images/menu/menu3.jpg"]],
        ["lunch",
			["Classic BBQ Ribs",132,"images/menu/menu4.jpg"],
			["Fizz & Fries",70,"images/menu/menu5.jpg"]],
        ["dinner",
			["Macaroni Chicken",45,"images/menu/menu6.jpg"],
			["Cheese Quesadilla",30,"images/menu/menu7.jpg"],
			["Pulled Pork Mac Stack",231,"images/menu/menu8.jpg"],
			["Beef Tips",231,"images/menu/menu9.jpg"]]
        
    ];
				
	for(var i = 0;i < menudb.length;i++){
		var item = "<div class=\"leftnavitem\">";
		item += "<input type=\"hidden\" value=\""+i+"\">";
		item += menudb[i][0]+"</div>";
		$("#leftnavitemlist").append(item);
	}
	displayRight(0);
	
	$(".leftnavitem").click(function(){
		var index = $(this).find($("input")).val();
		displayRight(index);
	}).mouseenter(function(){
		$(this).animate({padding: '12px 10px 12px 25%'}, 200);
	}).mouseleave(function(){
		$(this).animate({padding: '15px 30px'}, 100);
	});
	
	$("#backbtn").click(function(){
		window.location.replace("detail.html?restid="+(restid+1));
	}).mouseenter(function(){
		$(this).animate({padding: '10px 10px 10px 15%'}, 100);
	}).mouseleave(function(){
		$(this).animate({padding: '10px'}, 100);
	});
    

	function displayRight(index){
		$("#rightdisplay").empty();
		for(var i = 1;i < menudb[index].length;i++){
			var item = "<div class=\"rightdisplayitem\">";
			item += "<img src=\""+menudb[index][i][2]+"\"><br>";
			item += "<div class=\"headline\"><table><tr><td>"+menudb[index][i][0]+"</td><td class=\"price\">"+menudb[index][i][1]+"</td><td><div class=\"resultbtn\"><img src=\"images/star.png\"></div></td></tr></div>";
			$("#rightdisplay").append(item);
		}
        
		$('#rightdisplay').css("padding","50px 0px 0px 0px");
		$('#rightdisplay').animate({padding:'0px'});
		
        $('.resultbtn').click(function(){
        console.log('a');
        console.log($(this).find($('img')));
        if($(this).find($('img')).attr('src') == 'images/star.png'){
           $(this).find($('img')).attr('src','images/star1.png');
        }else{
            $(this).find($('img')).attr('src','images/star.png');
        }
		
    });
	}
    
	$('#rightdisplay').css("padding","50px 0px 0px 0px");
	$('#rightdisplay').animate({padding:'0px'});
    
    
});