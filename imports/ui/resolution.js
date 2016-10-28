import { Template } from 'meteor/templating';
import { Resolution } from '../api/resolutions.js';
import './task.html';

Template.task.events({
  'click .toggle-checked'() {

    // Set the checked property to the opposite of its current value
    Resolution.update(this._id, {
      $set: { checked: ! this.checked },
    });

  },

  'click .delete'() {
    Resolution.remove(this._id);
  },
});
