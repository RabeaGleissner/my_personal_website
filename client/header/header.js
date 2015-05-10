Template.body.events({
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
  }
});
