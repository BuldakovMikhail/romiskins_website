document.addEventListener('DOMContentLoaded', function () {
    $(window).bind("scroll", function() {
        if ($(document).scrollTop() >= $("main").offset().top - $('#nav').height() - 15){
            document.getElementById('nav').style.background = "#6A7BFF";
        } else {
            document.getElementById('nav').style.background = "rgb(37, 186, 255)";
        }
    }); 
});