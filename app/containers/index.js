import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Admin from './admin/Admin';
import Front from './front/Front';

class IndexApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route component={Front} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default IndexApp;
