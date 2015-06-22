Template.header.events({
  "click ul.navigation": function () {
    $('.small-screen nav li').slideToggle();
  },
  "touchstart ul.navigation": function () {
    $('.small-screen nav li').show('slow');
  }
});

$(function() {
    var $window = $(window),
        $body = $('body');

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
