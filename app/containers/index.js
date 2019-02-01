import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { message } from 'antd';

import { actions } from '../reducers';
import Admin from './admin/Admin';
import Front from './front/Front';
import NotFound from './notFound/NotFound';
import Article from './article/Article';
import style from './style.css';

const { userAuth } = actions;

class IndexApp extends Component {
  componentDidMount() {
    const { userVerify } = this.props;
    userVerify();
  }

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
            <Route path="/article" component={Article} />
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

function mapDispatchToProps(dispatch) {
  return {
    userVerify: bindActionCreators(userAuth, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexApp);
