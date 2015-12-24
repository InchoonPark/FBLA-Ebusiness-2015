Template.Home.rendered = function() {

  $('.product-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3,
      },
      1000:{
        items:5,
      }
    }
  });  

  $('.related-products-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2,
      },
      1000:{
        items:2,
      },
      1200:{
        items:3,
      }
    }
  });  

  $('.brand-list').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
  });   

  // Bootstrap Mobile Menu fix
  $(".navbar-nav li a").click(function(){
    $(".navbar-collapse").removeClass('in');
  });    
  
  // Bootstrap ScrollPSY
  $('body').scrollspy({ 
    target: '.navbar-collapse',
    offset: 95
  })

   
}