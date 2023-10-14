$(document).ready(function(){

    console.log('star');
    $('.resultbtn').click(function(){
        console.log('a');
        console.log($(this).find($('img')));
        if($(this).find($('img')).attr('src') == 'images/star.png'){
           $(this).find($('img')).attr('src','images/star1.png');
        }else{
            $(this).find($('img')).attr('src','images/star.png');
        }
    });
	
});