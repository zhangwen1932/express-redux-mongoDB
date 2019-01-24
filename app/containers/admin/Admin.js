/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon } from 'antd';
import {
  Switch,
  Route,
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import style from './style.css';

import Login from './components/login/Login';
import UserList from './components/userlist/UserList';
import UserArticle from './components/userArticle/UserArticle';

import { actions } from '../../reducers/index';
import { actions as AdminActions } from '../../reducers/admin';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentWillReceiveProps() {
    this.props.change_location_admin(window.location.pathname.replace(/\/admin/, '') || '/');
  }

  handleChangeURL = (key) => {
    console.log('key', key);
    const url = `/admin${key}`;
    console.log('url', url);
    this.props.change_location_admin(key.key);
    this.props.history.push(key.key);
  }

  render() {
    const { login, userInfo } = this.props;
    const {
      Content, Sider,
    } = Layout;
    const { url } = this.props.match;
    console.log('this.props.match', this.props.match);
    return (
      <div className={style.container}>
        {
          userInfo.username
            ? (
              <Layout className={style.layout}>
                <Sider>
                  <Menu
                    selectedKeys={[this.props.url]}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    onClick={this.handleChangeURL}
                  >
                    <Menu.Item key="/admin">
                      <Icon type="pie-chart" />
                      <span>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/articleList">
                      <Icon type="pie-chart" />
                      <span>文章列表</span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Content>
                    <Switch>
                      <Route exact path="/admin" component={UserList} />
                      <Route path="/admin/articleList" component={UserArticle} />
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
    change_location_admin: bindActionCreators(AdminActions.changeLocationAdmin, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
