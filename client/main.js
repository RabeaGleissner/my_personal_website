Projects = new Mongo.Collection("projects");

if (Meteor.isClient) {

  Meteor.subscribe("projects");

  Template.project.helpers({
    projects: function () {
    
    console.log("returning " + Projects.find({}).count() + " projects");
    return Projects.find({});
    }
  });

  }

  

if (Meteor.isServer) {
  Meteor.publish("projects", function () {
      return Projects.find({});
      console.log("returning " + Projects.find({}).count() + " projects on Sever side");
    });
}

