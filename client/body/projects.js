
Template.body.events({

  "click #read-more": function (event) {
  event.preventDefault();
  console.log('works');
  var $this = $(event.target);

  $(".project-item.active").removeClass('active');

  var activeArticle = $($this).parent().parent().parent().parent();
  activeArticle.addClass('active');

  toggleDescription();
  changeLinkText();

  }

});

function toggleDescription(){
      $(".project-item.active p").last().slideToggle('fast'); 
}

function changeLinkText(){
  if ( $(".project-item.active a").first().text() == ("Read more")){
  
    $(".project-item.active a").first().text('Read less');
  } else {
 
    $(".project-item.active a").first().text('Read more');
  }
}