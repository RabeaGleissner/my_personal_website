Template.body.events({

  "mouseup #enter": function () {
  console.log('ev def');

  $("nav").slideDown(1000);
  $("nav").addClass('fixed');

  }

});