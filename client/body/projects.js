Template.body.events({
  "click #project-screenshot": function (event) {
  event.preventDefault();
  console.log('clicked');

  $('.project-description').toggleClass("hide");

  }
});
