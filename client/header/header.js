Template.header.events({
  "mouseup #about-nav": function () {
    console.log('clicked about')
    $('nav a').removeClass('active');
    $('#about-nav').addClass('active');
  },
  "mouseup #projects-nav": function () {
    console.log('clicked projects')

    $('nav a').removeClass('active');
    $('#projects-nav').addClass('active');
  },
  "mouseup #contact-nav": function () {
    console.log('clicked contact')

    $('nav a').removeClass('active');
    $('#contact-nav').addClass('active');
  }
});
