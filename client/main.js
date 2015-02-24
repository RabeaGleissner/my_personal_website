Projects = new Mongo.Collection("projects");

if (Meteor.isClient) {

  Meteor.subscribe("projects");

  Template.project.helpers({
    projects: function () {
      return Projects.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish("projects", function () {
      return Projects.find();
    });
}
