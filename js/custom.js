
$(document).ready(function(){
    $("#slider_1").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        dots:true,
        // autoplay:true,
        // autoplayTimeout:1000,

    })

    
    $('#slider_2').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        dots:false,
        // autoplay:true,
        // autoplayTimeout:1000,
        navText: ['<i class="fa-solid fa-circle-arrow-left"></i>', '<i class="fa-solid fa-circle-arrow-right"></i>'],
    
    });
  });