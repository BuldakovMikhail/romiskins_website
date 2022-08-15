document.addEventListener('DOMContentLoaded', function () {

  $('.single-item').slick({
    autoplay: true,
    arrows: true,
    dots: false
});

$("#select_menu").slick({
    dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    }
    ]
});

});
