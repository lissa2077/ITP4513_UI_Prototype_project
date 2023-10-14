$(document).ready(function(){
	var urlParams = parseURLParams(window.location.href);
	if(urlParams == null){
		$('#restid').val(1);
		var restid = 1;
	}else{
		$('#restid').val(urlParams["restid"]);
		var restid = parseInt($('#restid').val()-1);
	}
	
	var menudb = [
		["Halloween",
			["Cheese Pumpkins",231,"images/menu/menu1.jpg"],
			["Jack-o'-Lantern Pot Pies",231,"images/menu/menu2.jpg"]],
        ["Hot",
			["Chef’s Soup",231,"images/menu/menu3.jpg"],
			["Prawn Cocktail",231,"images/menu/menu4.jpg"],
			["Smoked Salmon",231,"images/menu/menu5.jpg"],
			["Fresh Seasonal Oysters",231,"images/menu/menu6.jpg"]],
        ["breakfast",
			["Fried chicken and Waffle",231,"images/menu/menu1.jpg"],
			["Bissell Breakfast",231,"images/menu/menu2.jpg"],
			["Breakfast Pie",231,"images/menu/menu3.jpg"]],
        ["lunch",
			["Classic BBQ Ribs",231,"images/menu/menu4.jpg"],
			["Fizz & Fries",231,"images/menu/menu5.jpg"]],
        ["dinner",
			["Macaroni Chicken Minestrone",231,"images/menu/menu6.jpg"],
			["Cheese Quesadilla",231,"images/menu/menu7.jpg"],
			["Pulled Pork Mac Stack",231,"images/menu/menu8.jpg"],
			["Beef Tips",231,"images/menu/menu9.jpg"]]
        
    ];
	var item = "<table rules=\"all\">";
	for(var i = 0;i < menudb.length;i++){
        item += "<tr>";
		console.log(menudb[i]);
		for(var j = 0;j < menudb[i].length;j++){
			if(j > 0){
				item += menudb[i][j][0]+"<br>";
			}else{
				item += "<td>"+menudb[i][j]+"</td><td>";
			}
		}
		
		item += "</td></tr>";
        
    }
	item += "</table>";
	$("#floatmenu").append(item);  
	var item = "<div class=\"more\">>>More Menu</div>";
	$("#floatmenu").append(item); 
	
	$(".more").click(function(){
		console.log($(this).parent().attr('id'));
		console.log($("#floatmenu").attr('id'));
		console.log($(this).parent().attr('id') == "floatmenu");
		if($(this).parent().attr('id') == "floatmenu"){
			window.location.replace("menu.html?restid="+(restid+1));
		}else{
			window.location.replace("comments.html?restid="+(restid+1));
		}
		
	}).mouseenter(function(){
        $(this).animate({width: '40%'}, 100);
    }).mouseleave(function(){
        console.log("a");
		$(this).css('width','auto');
	});
});