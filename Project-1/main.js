$(document).ready(function () {
    $('#owl-1 .owl-carousel').owlCarousel(
        {
          items: 1,
          loop: true,
          nav: true,
          navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
          autoplay: false,
          autoplaySpeed: 500,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          dots: false,
        }
      );

      $('#web-progressbar').circleProgress({
        value: .90,
        size: 200,
        thickness:2,
        fill:'#0dbcc2',
        emptyFill:'#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-parcentage').html(Math.round(90 * progress) + '<i>%</i>');
        });;
      
        $('#graphic-progressbar').circleProgress({
            value: .95,
            size: 200,
            thickness:2,
            fill:'#0dbcc2',
            emptyFill:'#fff'
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.progressbar-parcentage').html(Math.round(95 * progress) + '<i>%</i>');
            });;
      
        $('#digital-progressbar').circleProgress({
                value: .84,
                size: 200,
                thickness:2,
                fill:'#0dbcc2',
                emptyFill:'#fff'
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.progressbar-parcentage').html(Math.round(84 * progress) + '<i>%</i>');
                });;

                $('.portfolio-list').masonry({
                    // options
                    itemSelector: '.grid-item',
                    columnWidth: 200
                  }); 
});
$(document).ready(function () {
    $('#owl-2 .owl-carousel').owlCarousel(
        {
          items: 3,
          loop: true,
          nav: false,
          // navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
          autoplay: false,
          autoplaySpeed: 500,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          dots: true,
        }
      );
    });







  
  
  
  
  
  
  
  
  