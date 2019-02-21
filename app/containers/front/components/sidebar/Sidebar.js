import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card, Tag, Divider, Icon,
} from 'antd';
import { actions as FrontActions } from '../../../../reducers/front';
import styles from './style.css';

class Sidebar extends Component {
  componentDidMount() {
    const { getAuthorInfo } = this.props;
    getAuthorInfo();
  }

  render() {
    const {
      authorName, profile, avatar, occupation, company,
    } = this.props;
    return (
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
)(Sidebar);
