Router.route('/', function () {
  this.render('Home');
});

Router.route('/contact');
Router.route('/projects');

// Router.route('/portfolio', function() {
// this.render('portfolio', {
//     projects: function() {
//         return Projects.findOne({id: this.params.movieId});
//     }
//   });
// });