Projects = new Mongo.Collection("projects");

if (Meteor.isClient) {
  Meteor.subscribe("projects");

    Template.projects.helpers({
      projects: function () {
      return Projects.find({});
      }
    });
  }


if (Meteor.isServer) {
  Meteor.publish("projects", function () {
      return Projects.find({});
      
    });

}

