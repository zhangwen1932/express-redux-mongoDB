import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card, Row, Col, Tag, Divider, Icon,
} from 'antd';

import styles from './style.less';

import { actions as FrontActions } from '../../reducers/front';

class Front extends Component {
  componentDidMount() {
    const { getAuthorInfo } = this.props;
    getAuthorInfo();
  }

  render() {
    const {
      children, authorName, profile, avatar, occupation, company,
    } = this.props;
    const operationTabList = [
      {
        key: 'articles',
        tab: (
          <span>
            文章
            <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'projects',
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
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    authorName, profile, avatar, occupation, company,
  } = state.front;
  return {
    authorName,
    profile,
    avatar,
    occupation,
    company,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthorInfo: bindActionCreators(FrontActions.getAuthorInfo, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Front);
