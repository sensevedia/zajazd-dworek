$(window).scroll(function() {
    if ($(".navbar-fixed-top").offset().top > 1) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        
        //$(".container-nav").removeClass("scroll-nav");
       // $(".container-nav").addClass("scroll-nav-desktop");
       // $("body").addClass("small-padding");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
       
      //  $(".container-nav").addClass("scroll-nav");
       // $(".container-nav").removeClass("scroll-nav-desktop");
       //  $("body").removeClass("small-padding");
    }
});