
function autogrow(textarea){
	var adjustedHeight=textarea.clientHeight;
	console.log(textarea.scrollHeight);
	console.log(adjustedHeight);
	adjustedHeight=Math.max(textarea.scrollHeight,adjustedHeight);
	if (adjustedHeight>textarea.clientHeight){
		textarea.style.height=adjustedHeight+'px';
	}
	console.log("---");

}

$(document).ready(function(){
	var urlParams = parseURLParams(window.location.href);
	if(urlParams == null){
		$('#restid').val(1);
		var restid = 1;
	}else{
		$('#restid').val(urlParams["restid"]);
		var restid = parseInt($('#restid').val()) - 1;
	}

	$("#backbtn").click(function(){
		$(this).css("box-shadow","inset 0 0 5px 0px black");
		window.location.replace("comments.html?restid="+(restid+1));
	});
	
	$("#sendbtn").click(function(){
		$(this).css("box-shadow","inset 0 0 5px 0px black");
		alert("Submit Sucessfully");
		window.location.replace("comments.html?restid="+(restid+1));
		
	});

	$("#ratinglike").click(function(){
		$(this).animate({opacity:'1.0'}, 100);
		$("#ratinghate").animate({opacity:'0.3'}, 100);
	});
	
	$("#ratinghate").click(function(){
		$(this).animate({opacity:'1.0'}, 100);
		$("#ratinglike").animate({opacity:'0.3'}, 100);
	});
});