// $("button").click(function(){
//     $("h1").hide();
// });

// $("button").click(function(){
//     $("h1").toggle();
// });

// $("button").click(function(){
//     $("h1").fadeOut();
// });

// $("button").click(function(){
//     $("h1").fadeOut();
// });

// $("button").click(function(){
//     $("h1").slideUp();
// });

// $("button").click(function(){
//     $("h1").slideToggle();
// });


// in animate function I can only change numeric values, nothing else
// if I want to use %, I have to use it on string

// $("button").click(function(){
//     $("h1").animate({opacity: 0.5});
// });

// $("button").click(function(){
//     $("h1").animate({margin: 20});
// });

// $("button").click(function(){
//     $("h1").animate({margin: "20%"});
// });

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});