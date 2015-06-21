Template.header.events({
  "click ul.navigation": function () {
    $('.small-screen nav li').slideToggle();
  },
  "touchend ul.navigation": function () {
    $('.small-screen nav li').slideToggle();
  }
});

$(function() {
    var $window = $(window),
        $body = $('body');

    $window.resize(function resize(){
        if ($window.width() < 600) {
            return $body.addClass('small-screen');
        }
        $body.removeClass('small-screen');
    }).trigger('resize');
});