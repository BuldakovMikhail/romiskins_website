document.addEventListener('DOMContentLoaded', function() {

    $('nav a').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top - $('nav').height()
        }, {
            duration: 370,   // по умолчанию «400»
            easing: "linear" // по умолчанию «swing»
        });
    
        return false;
    });

});