Template.body.events({

  "mouseup #home-nav": function () {
  $("nav").hide();
  $("nav").removeClass('fixed');
  }

});

$(function() {
    $(window).scroll(function() {
      console.log('scroll')
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $("nav").slideDown(1000);
            $("nav").addClass('fixed');
        } else {
          $("nav").slideUp(1000);
          $("nav").removeClass('fixed');
        }
    });
});
