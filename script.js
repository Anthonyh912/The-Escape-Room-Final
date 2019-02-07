$("body").mouseenter(function() {
    $(".intro1").hide();
    $(".choices1").hide();
    $(".buttonone").hide();
    $(".answer1").hide();
    $(".answer2").hide();
    $(".intro2").hide();
    $(".choices2").hide();
    $(".buttontwo").hide();
    $(".answer3").hide();
    $(".answer4").hide();
    $(".intro3").hide();
    $(".choices3").hide();
    $(".buttonthree").hide();
    $(".intro4").hide();
    $(".choices4").hide();
    $(".buttonfour").hide();
    $(".intro5").hide();
    $(".choices5").hide();
    $(".buttonfive").hide();
    $(".stuff").hide();
});
$(".start").click(function() {
    $(".info").hide();
    $(".intro1").show();
    $(".choices1").show();
    $(".buttonone").show();
});
$(".p1").click(function() {
    $(".answer2").show();
    $(".choices1").hide();
    $(".buttonone").hide();
    $(".intro1").hide();
    $(".intro2").show();
    $(".choices2").show();
    $(".buttontwo").show();
});
$(".p2").click(function() {
    $(".answer1").show();
    $(".choices1").hide();
    $(".buttonone").hide();
    $(".intro1").hide();
    $(".intro2").show();
    $(".choices2").show();
    $(".buttontwo").show();
});
$(".p3").click(function() {
   $(".intro2").hide();
    $(".choices2").hide();
    $(".buttontwo").hide();
    $(".answer3").show();
    $(".intro3").show();
    $(".choices3").show();
    $(".buttonthree").show();
    $(".answer1").hide();
    $(".answer2").hide(); 
});
$(".p4").click(function() {
   $(".intro2").hide();
    $(".choices2").hide();
    $(".buttontwo").hide();
    $(".answer4").show();
    $(".intro4").show();
    $(".choices4").show();
    $(".buttonfour").show();
    $(".answer1").hide();
    $(".answer2").hide();
});
$(".p5").click(function() {
    $(".answer3").hide();
    $(".intro3").hide();
    $(".choices3").hide();
    $(".buttonthree").hide();
    $(".intro5").show();
    $(".choices5").show();
    $(".buttonfive").show();
    $(".stuff").show();
});
$(".p6").click(function() {
    $(".answer4").hide();
    $(".intro4").hide();
    $(".choices4").hide();
    $(".buttonfour").hide();
    $(".intro6").show();
    $(".choices6").show();
    $(".buttonsix").show();
    $(".stuff").show();
});
$(".p7").click(function() {
    $(".answer").hide();
    $(".intro").hide();
    $(".choices").hide();
    $(".button").hide();
    $(".intro").show();
    $(".choices").show();
    $(".button").show();
    $(".stuff").show();
});
$(".p8").click(function() {
    $(".answer").hide();
    $(".intro").hide();
    $(".choices").hide();
    $(".button").hide();
    $(".intro").show();
    $(".choices").show();
    $(".button").show();
    $(".stuff").show();
});