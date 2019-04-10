import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {
//   Breadcrumb, Icon, Divider, Card,
// } from 'antd';

import {
  Breadcrumb, Icon, Divider, Card,
} from '../../../../lib/antd';
import Comment from '../comment/Comment';
import CommentList from '../commentList/CommentList';
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
        <Divider>评论</Divider>
        <div className={style.comment}>
          <Comment />
        </div>
        <Divider />
        <CommentList />
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
