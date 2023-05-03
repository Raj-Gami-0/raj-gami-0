$(document).ready(function(){
    $("#slider_1").owlCarousel({
        items:1,
        margin:30,
        center:true,
        loop:true,
        // stagePadding:50,
        // mouseDrag:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
    });
    $('#slider_2').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText: ['<i class="fa-solid fa-circle-arrow-left"></i>', '<i class="fa-solid fa-circle-arrow-right"></i>'],
        smartSpeed: 1000,
        autoplayHoverPause:true,
    });
  });