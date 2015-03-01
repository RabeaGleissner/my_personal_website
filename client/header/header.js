Template.body.events({

  "mouseup #home-nav": function () {
    $("nav").hide();
    $("nav").removeClass('fixed');
  },
  "mouseup #about-nav": function () {
    $('nav a').removeClass('active');
    $('#about-nav').addClass('active');
  },
  "mouseup #projects-nav": function () {
    $('nav a').removeClass('active');
    $('#projects-nav').addClass('active');
  },
  "mouseup #contact-nav": function () {
    $('nav a').removeClass('active');
    $('#contact-nav').addClass('active');
  },
  "mouseup a#enter": function () {
    $('nav a').removeClass('active');
    $('#about-nav').addClass('active');
  }

});

$(function() {
  $(window).scroll(function() {
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
