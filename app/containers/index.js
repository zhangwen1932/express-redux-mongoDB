import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { message } from 'antd';

import Admin from './admin/Admin';
import Front from './front/Front';
import NotFound from './notFound/NotFound';
import style from './style.css';


class IndexApp extends Component {
  componentDidUpdate() {
    const { notification } = this.props;
    if (notification.content) {
      message.info(notification.content);
    }
  }

  render() {
    return (
      <Router>
        <div className={style.container}>
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

function mapStateToProps(state) {
  return {
    notification: state.globalState.msg,
  };
}

export default connect(
  mapStateToProps,
)(IndexApp);
