Projects = new Mongo.Collection("projects");

if (Meteor.isClient) {
  Meteor.subscribe("projects");

    Template.body.helpers({
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

