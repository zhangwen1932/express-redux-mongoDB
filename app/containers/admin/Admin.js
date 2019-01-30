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
import ArticleList from './components/articleList/ArticleList';
import NewArticle from './components/newArticle/NewArticle';

import { actions } from '../../reducers/index';
import { actions as AdminActions } from '../../reducers/admin';

class Admin extends Component {
  handleChangeURL = (key) => {
    const url = `${key.key}`;
    this.props.changeLocationAdmin(url); // 先修改路由
    this.props.history.push(url); // 这块做跳转
  }

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
                    defaultSelectedKeys={['/admin']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    onClick={this.handleChangeURL}
                  >
                    <Menu.Item key="/admin">
                      <Icon type="team" />
                      <span>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/articleList">
                      <Icon type="file-text" />
                      <span>文章列表</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/newArticle">
                      <Icon type="cloud-upload" />
                      <span>发表文章</span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Content>
                    <Switch>
                      <Route exact path="/admin" component={UserList} />
                      <Route path="/admin/articleList" component={ArticleList} />
                      <Route path="/admin/newArticle" component={NewArticle} />
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
    changeLocationAdmin: bindActionCreators(AdminActions.changeLocationAdmin, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
