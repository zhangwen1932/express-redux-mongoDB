/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon } from 'antd';
import {
  Switch,
  Route,
} from 'react-router-dom';

import style from './style.css';

import Login from './components/login/Login';
import UserList from './components/userlist/UserList';
import UserArticle from './components/userArticle/UserArticle';

import { actions } from '../../reducers/index';

class Admin extends Component {
  render() {
    const { login, userInfo } = this.props;
    const {
      Content, Sider,
    } = Layout;
    return (
      <div className={style.container}>
        {
          userInfo.username
            ? (
              <Layout className={style.layout}>
                <Sider>
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                  >
                    <Menu.Item key="1">
                      <Icon type="pie-chart" />
                      <span>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="pie-chart" />
                      <span>文章列表</span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Content>
                    <Switch>
                      <Route exact path="/admin" component={UserList} />
                      <Route path="/admin/article" component={UserArticle} />
                    </Switch>
                  </Content>
                </Layout>
              </Layout>
            )
            : <Login login={login} />
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
