import React, { Component } from 'react';
import {
  Card, Row, Col, Tag, Divider, Icon,
} from 'antd';

import styles from './style.less';

class Front extends Component {
  render() {
    const avatarImage = 'https://wx2.sinaimg.cn/mw1024/9499f9e8ly1fyhrmm715tj20u00u00ti.jpg';
    const { children } = this.props;
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
                  <img alt="" src={avatarImage} />
                  <div className={styles.name}>Wendy</div>
                  <div>海纳百川，有容乃大</div>
                </div>
                <div className={styles.detail}>
                  <p>
                    <Icon type="idcard" />
                    前端工程师
                  </p>
                  <p>
                    <Icon type="cluster" />
                    酷链科技有限公司
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

export default Front;
