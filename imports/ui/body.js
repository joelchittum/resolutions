import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../api/resolutions.js';
import './body.hmtl';
import './resolution.js'

Template.body.helpers({
    resolutions() {
        return Resolutions.find({}, { sort: { createdAt: -1 } });
    }
});

Template.body.events({
  'submit .new-task'(event) {

    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Resolutions.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },

});
