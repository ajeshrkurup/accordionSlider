
var action = "click";
var speed = "5000";

$(document).ready(function () {
$("li.q").on(action, function() {
   $(this).next()
            .slideToggle(speed)
            .siblings("li.a")
                .slideUp();
    
    var img = $(this).children("img");
    $("img").not(img).removeClass("rt");
    img.toggleClass("rt");
    
    
});


});