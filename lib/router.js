Router.configure({
  layoutTemplate: 'application'
});
Router.map(function() {

this.route('home', {
    path: '/',
    template: 'home'
  });

this.route('article', {
  path: '/blog/:titleFriendly',
  template: 'article',
  data: function() {
    return Blog.findOne({titleFriendly: this.params.titleFriendly});
  }
});

});

Router.route('/contact');
Router.route('/projects');
Router.route('/connect-four');
Router.route('/blog');