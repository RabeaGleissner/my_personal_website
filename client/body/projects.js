Template.body.events({
  "click #read-more": function (event) {
  event.preventDefault();
  console.log('clicked');

  var $this = $(event.target);
      
  console.log($this.parent());
  
  $($this).parent().parent().parent().parent().addClass('active');

  showDescription();

  }
});


function showDescription() {
    $(".project-item.active p").last().toggleClass( "hide" );
}