
$(document).ready(function(){
    
	var urlParams = parseURLParams(window.location.href);
	if(urlParams == null){
		$('#restid').val(1);
		var restid = 1;
	}else{
		$('#restid').val(urlParams["restid"]);
		var restid = parseInt($('#restid').val()) - 1;
	}

    
    var commentdb = [
        [1,"user1554","Quite Good! ","A good restaurant :)","L"],
        [2,"Carry Mee","The Bad service I never see ","I come here but no one serve me and I eat air","H"],
        [3,"Mais21","Beautiful","I went this restaurant last week. This restaurant provides the best enviroment for the customers to enjoy their meals.","H"],
		[4,"saeadsx","Badddddddddddddd","sdadwhfefndcddfu","L"],
		[5,"Gooder","Delicuious","The meal is good but just a bit bad service. I dont care.","L"]
    ];
    
    
    for(var i = 0;i < commentdb.length;i++){
		var item = "<div class=\"floatsubcomment\">";
        if(commentdb[i][4] == "H"){
           item += "<span style=\"color: red;\">Hated &#128078; </span>";
        }else{
           item += "<span style=\"color: green;\">Liked &#128077; </span>";
        }
		item += ": <span style=\"color: #a08062;\">"+commentdb[i][2]+"</span><hr>"+commentdb[i][3]+"<br><br>";
		
		if(i == 0){
			item += "<div id=\"commentpicbtn\">Show Pictrue</div>";
		}
		item += "<br><b>"+commentdb[i][1]+"</b>";
		if(i == 0){
			item += "<div id=\"commentpic\"><hr><img src=\"images/banner1.jpg\"></div>";
		}
		item += "</div>";
		$("#floatcomment").append(item);  
    }

	$("#writebtn").click(function(){
		$(this).css("box-shadow","inset 0 0 5px 0px black");
		window.location.replace("writecomments.html?restid="+(restid+1));
	});
	
	$("#backbtn").click(function(){
		$(this).css("box-shadow","inset 0 0 5px 0px black");
		window.location.replace("detail.html?restid="+(restid+1));
	});

	var commentpicopen = 0;
	
	$("#commentpicbtn").click(function(){
		if(commentpicopen == 0){
			$(this).text('Hide Pictrue');
			$("#commentpic").animate({height:'120px'},200);
			commentpicopen = 1;
		}else{
			$(this).text('Show Pictrue');
			$("#commentpic").animate({height:'0px'},200);
			commentpicopen = 0;
		}
	});
	
});