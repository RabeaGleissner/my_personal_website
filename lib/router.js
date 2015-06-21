Router.configure({
  layoutTemplate: 'application'
});
Router.map(function() {
this.route('home', {
    path: '/',
    template: 'home'
  });
});

Router.route('/contact');
Router.route('/projects');
Router.route('/connect-four');
Router.route('/blog');