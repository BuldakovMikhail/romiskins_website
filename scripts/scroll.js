let position;
document.addEventListener('DOMContentLoaded', function () {

    $(window).bind("scroll", function() {
        position = $(document).scrollTop();
        let deg = -45 + Math.round(position / 10); 
        if (window.screen.width >= 1000) {
            document.getElementById('header').style.background = "linear-gradient("+ deg +"deg, #fff, rgb(37, 186, 255) 30%)";
        } else {
            document.getElementById('header').style.background = "linear-gradient(-45deg, #fff, rgb(37, 186, 255) 30%)";
        }
    });

});