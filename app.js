$("#one").scroll(function() {
var windowpos = $("#one").scrollTop();
if (windowpos > 20){
    $(".eighty_five").addClass("start");  
    $(".fifty_six").addClass("start");
}
});

$("#two").scroll(function() {
    var windowpos = $("#two").scrollTop();
    if (windowpos > 20){
        $(".ninty").addClass("start");
        $(".seventy_five").addClass("start");
    }
});

$("#three").scroll(function() {
    var windowpos = $("#three").scrollTop();
    if (windowpos > 20){
        $(".sixty_six").addClass("start");
        $(".eighty").addClass("start");
    }
});

$(".food_details ").scroll(function() {
        $(".down-scroll").hide();
});

$( ".like" ).click(function(e) {
    e.preventDefault();
    $(this).addClass( "clicked" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        $(this).removeClass( "clicked" );
    });
});

setInterval(function(){ 

    var one = $('.flickity-slider > div:nth-child(1).gallery-cell').hasClass('is-selected');
    var two = $('.flickity-slider > div:nth-child(2).gallery-cell').hasClass('is-selected');
    var three = $('.flickity-slider > div:nth-child(3).gallery-cell').hasClass('is-selected');
    
    if(one){
    $('#one').addClass('is-selected'); 
    $('#two').removeClass('is-selected');
    $('#three').removeClass('is-selected'); 
    }
    else if(two){
    $('#one').removeClass('is-selected'); 
    $('#two').addClass('is-selected');
    $('#three').removeClass('is-selected'); 
    $('.swipe').hide();
    }
    else if(three){
    $('#one').removeClass('is-selected'); 
    $('#two').removeClass('is-selected');
    $('#three').addClass('is-selected'); 
    }
    else{
    $('#one').removeClass('is-selected');    
    }
    
    }, 100);