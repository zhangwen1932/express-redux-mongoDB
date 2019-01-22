import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './components/login/Login';
import { actions } from '../../reducers/index';

class Admin extends Component {
  render() {
    const { login, userInfo } = this.props;
    console.log('userInfo', userInfo);
    console.log(typeof (userInfo));
    console.log(Object.keys(userInfo).length);
    return (
      <div>
        {
          userInfo.username ? <h1>管理界面</h1> : <Login login={login} />
        }
      </div>
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
