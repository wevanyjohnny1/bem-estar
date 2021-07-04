import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Body } from '../components/Body';
import { Appointment } from '../components/Appointment';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Body} />
    <Route path="/appointment" exact component={Appointment} />
  </Switch>
);

export default Routes;