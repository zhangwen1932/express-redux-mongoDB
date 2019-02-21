import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Card, Row, Col,
} from 'antd';

import Articles from './components/articles/Articles';
import Projects from './components/projects/Projects';
import Article from './components/article/Article';
import Sidebar from './components/sidebar/Sidebar';


import styles from './style.less';

import { actions as FrontActions } from '../../reducers/front';

class Front extends Component {
  componentDidMount() {
    const { getAuthorArticles } = this.props;
    getAuthorArticles();
  }

  onTabChange = (key) => {
    const { changeLocation, history } = this.props;
    changeLocation(key);
    history.push(key); // 这块做跳转
  }

  render() {
    const {
      total,
    } = this.props;
    const operationTabList = [
      {
        key: '/articleslist',
        tab: (
          <span>
            文章
            <span style={{ fontSize: 14 }}>
            (
              { total }
            )
            </span>
          </span>
        ),
      },
      {
        key: '/projects',
        tab: (
          <span>
            项目
            <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
    ];
    return (
      <div className={styles.container}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Sidebar />
          </Col>
          <Col lg={17} md={24}>
            {window.location.pathname !== '/article'
              ? (
                <Card
                  className={styles.tabsCard}
                  bordered={false}
                  tabList={operationTabList}
                  onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                  <Switch>
                    <Route exact path="/" component={Articles} />
                    <Route path="/articleslist" component={Articles} />
                    <Route path="/projects" component={Projects} />
                  </Switch>
                </Card>
              )
              : (
                <Card
                  bordered={false}
                >
                  <Article />
                </Card>
              )
          }
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    total,
  } = state.front;
  return {
    total,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthorArticles: bindActionCreators(FrontActions.getAuthorArticles, dispatch),
    changeLocation: bindActionCreators(FrontActions.changeLocation, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Front);
