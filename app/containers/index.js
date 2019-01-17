import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Admin from './admin/Admin';
import Front from './front/Front';
import NotFound from './notFound/NotFound';
import './style.css';

class IndexApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/404" component={NotFound} />
            <Route component={Front} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default IndexApp;
