$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        draggable: true,
    });
  });
$(document).ready(function(){
    $('.one-time').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        992:{
          items:4
        },
        1000:{
            items:6
        }
    }
})

$(document).ready(function(){
  $('.blog-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,

  });
});


window.addEventListener('scroll', function(){
    let header = this.document.querySelector('.main-menu');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// scroll up top button
$(document).ready( function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#scrollUp').fadeIn();
      }else{
        $('#scrollUp').fadeOut();
      }
    });
  
    $('#scrollUp').click(function(){
      $('html, body').animate({scrollTop : 0}, 800);
    });
  });