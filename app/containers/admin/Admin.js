import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './components/login/Login';
import { actions } from '../../reducers/index';

class Admin extends Component {
  render() {
    const { login } = this.props;
    return (
      <Login login={login} />
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.globalState.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(actions.handleLogin, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
