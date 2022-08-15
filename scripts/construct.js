document.addEventListener('DOMContentLoaded', function () { 
  $(function(){
    $('#select_menu div').height($('#select_menu div').width()/3);
  
    $(window).resize(function(){
      $('#select_menu div').height($('#select_menu div').width()/3);
    });
  });

  $('.const_item').click(function(){

    $('.const_item').removeClass('active');
    $(this).addClass('active');
    let cur_img = $(this).css('background-image');
    $('.overlay').css('background-image', cur_img);
  });

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
    $(function(){
      let drag = false;
      let startPosX;
      $('.overlay').on('touchstart', function(e){

        
        startPosX = e.changedTouches[0].pageX;
        drag = true;
        
      }).on('touchend', function(){
        drag = false;
      }).on('touchmove', function(e){
        e.preventDefault();
        if (drag){

          let curPosX = e.changedTouches[0].pageX,
              delta = curPosX - startPosX;
          startPosX = e.changedTouches[0].pageX;

          
    
          let backPosX = $('.overlay').css('background-position').split(' ')[0];
          let newBackPosX = delta < 0 ? parseInt(backPosX) + 10 : parseInt(backPosX) - 10;
    
          if (newBackPosX <= 0){
            newBackPosX = 0;
          } else if (newBackPosX >= 100){
            newBackPosX = 100;
          }
    
          $('.overlay').css('background-position', newBackPosX + '% 50%');
        } 
      });
    });
    
    } else {
    // код для обычных устройств
    $(function(){
      let drag = false;
      let startPosX;
      $('.overlay').on('mousedown', function(e){
        
        startPosX = e.clientX;
        drag = true;
        $('#const_img_overlay').css('cursor','grabbing');
        
      }).on('mouseup mouseout', function(){
        drag = false;
      }).on('mousemove', function(e){
        e.preventDefault();
        if (drag){
          let curPosX = e.clientX,
              delta = curPosX - startPosX;
          startPosX = e.clientX;
    
          let backPosX = $('.overlay').css('background-position').split(' ')[0];
          let newBackPosX = delta < 0 ? parseInt(backPosX) + 1 : parseInt(backPosX) - 1;
    
          if (newBackPosX <= 0){
            newBackPosX = 0;
          } else if (newBackPosX >= 100){
            newBackPosX = 100;
          }
    
          $('.overlay').css('background-position', newBackPosX + '% 50%');
        } else {
          $('#const_img_overlay').css('cursor','grab');
        }
      });
    });
    
}

});


