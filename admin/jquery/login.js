$(document).ready(function(){
	
    $("#loginbtn").click(function(){
		if($("#email").val() != "" && $("#pwd").val() != ""){
			$(this).css("box-shadow","inset 0 0 4px rgba(6, 1, 1, 0.95)");
			window.location = "index.html";
		}else{
			if($("#pwd").val() == ""){
				$("#pwd").focus();
			}
			if($("#email").val() == ""){
				$("#email").focus();
			}
		}
    }).mouseenter(function(){
        $(this).css("box-shadow","0 0 1px 1px #00000073");
    }).mouseleave(function(){
        $(this).css("box-shadow","");
    });
    
    $("#loginfbbtn").click(function(){
        $(this).css("box-shadow","inset 0 0 4px rgba(6, 1, 1, 0.95)");
        window.location.replace("index.html");
    }).mouseenter(function(){
        $(this).css("box-shadow","0 0 1px 1px #00000073");
    }).mouseleave(function(){
        $(this).css("box-shadow","");
    });
	
	
	$(".col-3 input").val("");
	  $(".input-effect input").focusout(function(){
		if($(this).val() != ""){
		  $(this).addClass("has-content");
		}else{
		$(this).removeClass("has-content");
		}
	  });
	
	$('#loginpage').css("margin-top","100px");
	$('#loginpage').css('opacity','0.5');
	$('#loginpage').animate({margin: "18% auto 0px auto",opacity:'0.95'},1500);
    
});