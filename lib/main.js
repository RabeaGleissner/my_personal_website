Projects = new Mongo.Collection("projects");
Blog = new Mongo.Collection("blog");

if (Meteor.isClient) {
  Meteor.subscribe("projects");
  Meteor.subscribe("blog");

    Template.projects.helpers({
      projects: function () {
        return Projects.find({});
      }
    });

    Template.blog.helpers({
      blog: function () {
        return Blog.find({}, {sort: {sortOrder: -1}});
      }
    });

    // Template.article.helpers({
    //   article: function () {
    //     return Blog.findOne({this.params.titleFriendly});
    //   }
    // });
  }


if (Meteor.isServer) {
  Meteor.publish("projects", function () {
      return Projects.find({});
    });
  Meteor.publish("blog", function () {
      return Blog.find({});
    });

}

