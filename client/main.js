$(function() {

// displaying nav on scroll and click

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
            $("nav").removeClass("hide");
        }
  });

  $('#enter').click(function(){
      $("nav").removeClass("hide");
  });

// Smooth scoll for anchor links
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});