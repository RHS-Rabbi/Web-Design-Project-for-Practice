$(document).ready(function () {
    $('#owl-1 .owl-carousel').owlCarousel(
        {
          items: 3,
          margin: 50,
          loop: true,
          nav: false,
          navText: ['Back','Next'],
          dots: false,
          dotsEach: true,
          autoplay: false,
          autoplaySpeed: 500,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
        }
      );

});
$(document).ready(function () {
    $('#owl-2 .owl-carousel').owlCarousel(
      {
        items: 1,
        margin: 50,
        loop: true,
        nav: false,
        navText: ['Back','Next'],
        dots: true,
        dotsEach: true,
        autoplay: false,
        autoplaySpeed: 500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      }
    );
  
  });






  
  
  
  
  
  
  
  
  