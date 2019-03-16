import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppReto from '/imports/ui/AppReto'
import '/imports/startup/accounts-config';
import { Principal } from '/imports/ui/layaout/principal'



Meteor.startup(() => {
  render(<Principal />, document.getElementById('react-target'));
});
