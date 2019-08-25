$(function() {

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
});


  // open Side Nav
  $(".icon").on("click", function() {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if($(".sideNav").hasClass("open")){
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
    }
  });

  // Search
  $(".srch").on("click", function() {
    $(".xtr form").toggleClass("open");
  });

  $(".xtr form").on("click", function() {
    $(this).removeClass("open");
  });

  $(".xtr form .cont").on("click", function(e) {
    e.stopPropagation();
  });

  // // Sticky Navbar
  // $(window).on("scroll", function() {
  //   if($(window).scrollTop() >= $(".navBar").innerHeight() / 2){
  //       $(".navBar").addClass("scroll")
  //   }else{
  //       $(".navBar").removeClass("scroll")
  //   }
  // });

  // // Navbar Effect On Scroll
  // var zero = 0;
  // $(window).on('scroll', function() {
  //   $(".navBar").toggleClass('hide', $(window).scrollTop() > zero);
  //   zero = $(window).scrollTop();
  // });

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:false,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: ["<span></span>","<span></span>"]
  });

  if($(window).width() < 768){
    $(".catalog .boxs .cont").addClass("owl-carousel");
  }else{
    $(".catalog .boxs .cont").removeClass("owl-carousel");
  }
  $('.catalog .owl-carousel').owlCarousel({
    rtl:true,
    autoplay: false,
    loop:true,
    nav:false,
    dots: true,
    items: 1,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3,
          margin: 5
      }
  },
    navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"]
  });
  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

})