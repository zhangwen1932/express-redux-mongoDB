import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { List, Icon } from 'antd';
import { List } from 'antd';

import { actions as FrontActions } from '../../../../reducers/front';
import ArticleCell from './ArticleCell';

class Articles extends Component {
  componentDidMount() {
    const { getAuthorArticles } = this.props;
    getAuthorArticles();
  }

  render() {
    const { articles, addLike } = this.props;
    articles.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    const data = [];
    articles.forEach((item, index) => {
      console.log(item);
      const article = {};
      article.key = index;
      article.id = item._id;
      article.title = item.title;
      article.content = item.content;
      article.time = item.time;
      article.likeCount = item.likeCount;
      article.commentsCount = item.commentsCount;
      data.push(article);
    });
    return (
      <List
        size="large"
        rowKey="id"
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <ArticleCell item={item} addLike={addLike} />
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    total, articles,
  } = state.front;
  return {
    total,
    articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthorArticles: bindActionCreators(FrontActions.getAuthorArticles, dispatch),
    addLike: bindActionCreators(FrontActions.addLike, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
