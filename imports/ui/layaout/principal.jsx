import React from 'react';

import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import AppReto from '/imports/ui/AppReto';
import Page404 from '/imports/ui/layaout/Page404/Page404';
import Users from '/imports/ui/Users';


const browserHistory = createBrowserHistory();


export const Principal = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={AppReto} />
      <Route component={Page404} />
    </Switch>
  </Router>
);

