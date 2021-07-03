import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Body } from '../components/Body';
import { SignUp } from '../components/SignUp';
import { Appointment } from '../components/Appointment';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Body} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/appointment" exact component={Appointment} />
  </Switch>
);

export default Routes;