import '~/config/reactotron';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Signin from '~/pages/Signin';

export default function App() {
  return (
    <Router>
      <Switch>
      <Route 
          path="/"
          component={Signin}
        />
        <Route 
          path="/signin"
          component={Signin}
        />
      </Switch>
    </Router>
  )
}
