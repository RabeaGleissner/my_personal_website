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

  // Meteor.startup(function (){
  //   if (Projects.find().count() === 0
  //     ){
  //     Projects.insert({
  //       title: "First project",
  //       intro: "A great Rails app",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum ipsam quo, natus sunt repellat! Explicabo necessitatibus magnam aspernatur architecto dolores exercitationem quidem vero voluptates nulla dolorum reiciendis, harum rerum."
  //     });
  //   }
  // });
}

