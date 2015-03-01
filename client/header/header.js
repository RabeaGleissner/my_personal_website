Template.body.events({

  "mouseup #enter": function () {
  console.log('ev def');

  $("nav").slideDown(1000);
  $("nav").addClass('fixed');

  },

  "mouseup #home-nav": function () {
  $("nav").slideUp(1000);
  $("nav").removeClass('fixed');

  }

});