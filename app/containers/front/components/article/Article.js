import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Breadcrumb, Icon, Divider, Card,
} from 'antd';

import { actions as Frontactions } from '../../../../reducers/articleDetail';
import style from './style.css';

class Article extends Component {
  componentDidMount() {
    const { getArticle } = this.props;
    const id = window.location.href.split('=')[1];
    getArticle(id);
  }

  render() {
    const { title, content, time } = this.props;
    return (
      <Card bordered={false}>
        <Breadcrumb>
          <Breadcrumb.Item href="http://localhost:9100/">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="file-text" />
            <span>{title}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Divider />
        <article>
          <header><h2>{title}</h2></header>
          <div className={style.time}>{time}</div>
          <section><p>{content}</p></section>
        </article>
        <p>评论</p>
        <div className={style.comment}>
          <div>
              邮箱:
            <input />
          </div>
          <div>
              昵称:
            <input />
          </div>
          <div>
              评论:
            <textarea />
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { title, content, time } = state.article;
  return {
    title,
    content,
    time,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getArticle: bindActionCreators(Frontactions.getArticle, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
