// dynamically display year in footer
Template.footer.rendered = function() {
      var year = new Date().getFullYear();
      $('p.footer').html(year + ' &copy; Rabea Gleissner');
};