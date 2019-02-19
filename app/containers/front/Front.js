import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Card, Row, Col, Tag, Divider, Icon,
} from 'antd';

import Articles from './components/articles/Articles';
import Projects from './components/projects/Projects';
import Article from './components/article/Article';

import styles from './style.less';

import { actions as FrontActions } from '../../reducers/front';

class Front extends Component {
  componentDidMount() {
    const { getAuthorInfo, getAuthorArticles } = this.props;
    getAuthorInfo();
    getAuthorArticles();
  }

  onTabChange = (key) => {
    const { changeLocation, history } = this.props;
    changeLocation(key);
    history.push(key); // 这块做跳转
  }

  render() {
    const {
      authorName, profile, avatar, occupation, company, total,
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
            <Card bordered={false} style={{ marginBottom: 24 }}>
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={avatar} />
                  <div className={styles.name}>{authorName}</div>
                  <div>{profile}</div>
                </div>
                <div className={styles.detail}>
                  <p>
                    <Icon type="idcard" />
                    {occupation}
                  </p>
                  <p>
                    <Icon type="cluster" />
                    {company}
                  </p>
                  <p>
                    <Icon type="environment" />
                    浙江省杭州市
                  </p>
                </div>
                <Divider dashed />
                <div className={styles.tags}>
                  <div className={styles.tagsTitle}>标签</div>
                  <Tag key="smart">很有想法</Tag>
                </div>
                <Divider style={{ marginTop: 16 }} dashed />
              </div>
            </Card>
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
    authorName, profile, avatar, occupation, company, total,
  } = state.front;
  return {
    authorName,
    profile,
    avatar,
    occupation,
    company,
    total,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthorInfo: bindActionCreators(FrontActions.getAuthorInfo, dispatch),
    getAuthorArticles: bindActionCreators(FrontActions.getAuthorArticles, dispatch),
    changeLocation: bindActionCreators(FrontActions.changeLocation, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Front);
