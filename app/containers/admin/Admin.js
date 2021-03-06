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
import Account from './components/account/Account';
import ProjectsList from './components/projectsList/ProjectsList';
import ArticleList from './components/articleList/ArticleList';
import NewArticle from './components/newArticle/NewArticle';

import { actions } from '../../reducers/index';
import { actions as AdminActions } from '../../reducers/admin';

class Admin extends Component {
  handleChangeURL = (key) => {
    const { changeLocationAdmin, history } = this.props;
    const url = `${key.key}`;
    changeLocationAdmin(url); // 先修改路由
    history.push(url); // 这块做跳转
  }

  render() {
    const { login, userInfo } = this.props;
    const {
      Content, Sider,
    } = Layout;
    const { pathname } = window.location;
    return (
      <div className={style.container}>
        {
          userInfo.username
            ? (
              <Layout className={style.layout}>
                <Sider>
                  <Menu
                    defaultSelectedKeys={['/admin/account']}
                    selectedKeys={[pathname]}
                    mode="inline"
                    theme="dark"
                    onClick={this.handleChangeURL}
                  >
                    <Menu.Item key="/admin/account">
                      <Icon type="setting" />
                      <span>个人设置</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/articleList">
                      <Icon type="file-text" />
                      <span>文章列表</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/newArticle">
                      <Icon type="cloud-upload" />
                      <span>发表文章</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/projects">
                      <Icon type="project" />
                      <span>项目列表</span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Content>
                    <Switch>
                      <Route exact path="/admin" component={Account} />
                      <Route exact path="/admin/account" component={Account} />
                      <Route path="/admin/articleList" component={ArticleList} />
                      <Route path="/admin/newArticle" component={NewArticle} />
                      <Route exact path="/admin/projects" component={ProjectsList} />
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
