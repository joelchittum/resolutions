import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

if(Meteor.isClient){
    Template.body.helpers({
        
    });
}

if(Meteor.isServer) {
  Meteor.startup(function(){
    //code to run on server at startup
  })
}
