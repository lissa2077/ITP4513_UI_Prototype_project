$(document).ready(function(){
	var urlParams = parseURLParams(window.location.href);
	if(urlParams != null){
		$('#keyword').val(urlParams["keyword"]);
		
		
	}else{
		$('#keyword').val("");
	}
	$('#searchbox').val($('#keyword').val());
	var userID = "1234";
	var pwd = "1234";
	var col = 0;
	//id,name,description,rating,distance,position,establishDate,catelog,pic
	var restaurantdb =[
		[1,"Good restaurant","",4.6,19,"Central",20180923,0,"images/rest1.jpg",["High Rating","seafood"]],
		[2,"ABC Cafe","",4.8,33,"Kowloon",20180923,1,"images/rest2.jpg",["Top 10","Most Comments"]],
		[3,"Japanese restaurant","",3.8,8,	"Tsuen Wan",20180923,2,"images/rest3.jpg",[]],
		[4,"Pizza!","",2.9,21,"Yuen Long",20180923,1,"images/rest4.jpg",[]],
		[5,"Dim Sum Place","",4.3,40,"North Point",20180923,0,"images/rest5.jpg",["Weeksday suggestion"]],
		
	];
	var catelog = [
		"Chinese restaurant","Amerian restaurant","Japanese restaurant"
	];
	var result = [];
	for(var i = 0;i < restaurantdb.length;i++){
		console.log(i+":"+restaurantdb[i][1]+" : "+$("#keyword").val());
		if(restaurantdb[i][1].includes($("#keyword").val())){
			result.push(restaurantdb[i]);
			console.log(i);
		}else{
			for(var j = 0;j < restaurantdb[i][9].length;j++){
				if(restaurantdb[i][9][j].includes($("#keyword").val())){
					result.push(restaurantdb[i]);
					console.log(i);
				}
			}
			
		}
	}
	displayResult(result);
	

	//display the search result
	function displayResult(result){
		$("#result").find("tbody").empty();
		var item = "";
		for(var i = 0;i < result.length;i++){
			item += "<tr><td><input type=\"hidden\" value=\""+result[i][0]+"\"><div class=\"resultpic\"><img src=\""+result[i][8]+"\"/></div>";
			item += "<div class=\"resulttext\"><b>"+result[i][1]+"</b><br>"+result[i][5]+" - "+result[i][4]+"km"
			item += "<br>Rating: "+result[i][3]+"<br>"+catelog[result[i][7]];
			for(var j = 0;j < result[i][9].length;j++){
				if(j == 0){
					item += "<br><div class=\"taglist\">";
				}
				item += "<div class=\"tag\">"+result[i][9][j]+"</div>";
				if(j == result[i][9].length-1){
					item += "</div>";
				}
			}
			item += "</div><div class=\"resultbtn\">";
			item += "<img src=\"images/star.png\"></div></td></tr>";
			
		}
		//item += "</table>";
		$("#result").find("tbody").append(item);
		
		$(".resultpic").click(function(){
			//alert($(this).parent().find("input:hidden").val());
			var restid = $(this).parent().find("input:hidden").val();
			if(restid != ""){
				console.log(restid);
				window.location.replace("detail.html?restid="+restid);
			}
		});
        $(".resulttext").click(function(){
			//alert($(this).parent().find("input:hidden").val());
			var restid = $(this).parent().find("input:hidden").val();
			if(restid != ""){
				console.log(restid);
				window.location.replace("detail.html?restid="+restid);
			}
		});
		
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
	
	var adsearch = 0;
	
	
	//order
	$(".functionitem").click(function(){
		
		switch($(".functionitem").index(this)){
			case 0:
				col = 1;
			break;
			case 1:
				col = 4;
			break;
			case 2:
				col = 3;
			break;
			case 3:
				if(adsearch == 0){
					adsearch = 1;
					$("#searchset").animate({height:'160px',padding: '10px'});
				}else{
					adsearch = 0;
					$("#searchset").animate({height:'0',padding: '0px'});
				}
				return;
			break;
		}
		adsearch = 0;
		$("#searchset").animate({height:'0',padding: '0px'});
		
		var arrow = "<div>";
		var showresult = result.slice();
		
		$(".functionitem").css("background-image","");
		
		if($(this).val() == "0"){
			console.log('0');
			$(".functionitem").val("");
			$(this).val("1");
			showresult.sort(descSortFunction);
			$(this).css("background-image","url(images/arrow1.png)");
			
		}else{
			console.log('1');
			$(".functionitem").val("");
			$(this).val("0");
			showresult.sort(ascSortFunction);
			$(this).css("background-image","url(images/arrow.png)");
		}
		console.log(col);
		displayResult(showresult);
		
	});
	

	

	function ascSortFunction(a, b) {
		if (a[col] === b[col]) {
			return 0;
		}
		else {
			return (a[col] < b[col]) ? -1 : 1;
		}
	}
	
	function descSortFunction(a, b) {
		if (a[col] === b[col]) {
			return 0;
		}
		else {
			return (a[col] > b[col]) ? -1 : 1;
		}
	}
	
	
	    $('#result tr').mouseenter(function(){
        $(this).animate({opacity:'0.6'}, 100);
        $(this).find($('td')).css('box-shadow','inset rgba(0, 0, 1, 0.67) 0px 1px 2px 0px');
	}).mouseleave(function(){
		$(this).animate({opacity:'1'}, 100);
        $(this).find($('td')).css('box-shadow',' 0px 1px 6px #00000047');
	});;
	
	
	
	
});