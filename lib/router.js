Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('projects'), Meteor.subscribe('blog')];
  }
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
  },
  onAfterAction: function() {
    $('html, body').animate({
      scrollTop: 0
    });
  }
});

});

Router.route('/contact');
Router.route('/projects');
Router.route('/connect-four');
Router.route('/blog');