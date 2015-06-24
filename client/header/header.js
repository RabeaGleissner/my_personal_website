Template.header.events({
  "click nav button": function (ev) {
    ev.preventDefault();
    $('nav li').show('slow');
  }, 
  "click nav li": function () {
    $('.small-screen nav li').hide('slow');
  }
});



$(function() {
    var $window = $(window),
        $body = $('body');

   if( navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i) ) {
      return $body.addClass('small-screen');
   }

    $window.resize(function resize(){
        if ($window.width() < 600) {
            $('nav li').css('display', 'none');
            return $body.addClass('small-screen');
        } else {
           $('nav li').css('display', 'inline-block');
           $body.removeClass('small-screen');
        }
    }).trigger('resize');
});
