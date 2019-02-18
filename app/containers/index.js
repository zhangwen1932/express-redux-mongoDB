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
import AdminArticle from './adminArticle/Article';
import Article from './article/Article';

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
        <React.Fragment>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/404" component={NotFound} />
            <Route path="/adminArticle" component={AdminArticle} />
            <Route path="/article" component={Article} />
            <Route component={Front} />
          </Switch>
        </React.Fragment>
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
