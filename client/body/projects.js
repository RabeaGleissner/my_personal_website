
Template.projects.events({
  "click #read-more": function (event) {
  event.preventDefault();
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

// Only run typed.js function after header is render (othewise it fires too soon)
Template.header.rendered = function() {
  $(".typed-effect").typed({
      strings: ["Hello, ^700 my name is Rabea..."],
      typeSpeed: 0.2
  });
}