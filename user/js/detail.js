$(document).ready(function(){
    
    var urlParams = parseURLParams(window.location.href);
	if(urlParams == null){
		$('#restid').val(1);
		var restid = 1;
	}else{
		$('#restid').val(urlParams["restid"]);
		var restid = parseInt($('#restid').val()-1);
	}
	//id,name,description,rating,distance,position,establishDate,catelog,pic
	var restaurantdb =[
		[1,"Good restaurant","",4.6,19,"Central","2018-09-23",0,"images/rest1.jpg",["High Rating","seafood"]],
		[2,"ABC Cafe","",4.8,33,"Kowloon","2018-09-23",1,"images/rest2.jpg",["Top 10","Most Comments"]],
		[3,"Japanese restaurant","",3.8,8,	"Tsuen Wan","2018-09-23",2,"images/rest3.jpg",[]],
		[4,"Pizza!","",2.9,21,"Yuen Long","2018-09-23",1,"images/rest4.jpg",[]],
		[5,"Dim Sum Place","",4.3,40,"North Point","2018-09-23",0,"images/rest5.jpg",["Weeksday suggestion"]],
		
	];
    
    var commentdb = [
        [1,"user1554","Quite Good! ","A good restaurant :)"],
        [2,"Carry Mee","The Bad service I never see ","I come here but no one serve me and I eat air"],
        [3,"Mais21","Beautiful","I went this restaurant last week. This restaurant provides the best enviroment for the customers to enjoy their meals."],
		[4,"saeadsx","Badddddddddddddd","sdadwhfefndcddfu"],
		[5,"Gooder","Delicuious","The meal is good but just a bit bad service. I dont care."]
    ];
    
    //order,[name,[name,price,pic]]
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
    
    var catelog = [
		"Chinese restaurant","Amerian restaurant","Japanese restaurant"
	];

    var item = "";
    item += "<div id=\"detailpic\"><img src=\""+restaurantdb[restid][8]+"\"></div><div id=\"detailrest\">"+restaurantdb[restid][1]+"<br>"+catelog[parseInt(restaurantdb[restid][7])]+"<br>Rating: "+restaurantdb[restid][3];
	for(var j = 0;j < restaurantdb[restid][9].length;j++){
		if(j == 0){
			item += "<br><div class=\"taglist\">";
		}
		item += "<div class=\"tag\">"+restaurantdb[restid][9][j]+"</div>";
		if(j == restaurantdb[restid][9].length-1){
			item += "</div>";
		}
	}
	item += "</div><div class=\"resultbtn\"><img src=\"images/star.png\"></div>";
    $("#float").append(item);

    var item = "";
    item += "<b>Information</b><br>Position: "+restaurantdb[restid][5]+"<br>Established Date: "+restaurantdb[restid][6]+"<br>Phone: "+restaurantdb[restid][2]+"<br>Map:<br><div id=\"map\"></div>";
    $("#floatdetail").append(item);

    for(var i = 0;i < commentdb.length;i++){
		if(i < 3){
			var item = "";
			item += "<div class=\"floatsubcomment\"><u>"+commentdb[i][2]+"</u><br>"+commentdb[i][3]+"<br><br><b>"+commentdb[i][1]+"</b></div>";
			$("#floatcomment").append(item);  
		}else{
			var item = "<div class=\"more\">>>More Comments</div>";
			$("#floatcomment").append(item);  
			break;
		}
    }
	
	
    
	$('#floatpage').css("padding-top","200px");
	$('#floatpage').css('opacity','0.5');
	$('#floatpage').animate({padding: "150px 0px 0px 0px",opacity:'1.0'},700);
	
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