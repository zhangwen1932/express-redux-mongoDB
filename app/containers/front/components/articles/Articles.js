import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Icon } from 'antd';

import ArticleListContent from './ArticleContent';
import { actions as FrontActions } from '../../../../reducers/front';

class Articles extends Component {
  componentDidMount() {
    const { getAuthorArticles } = this.props;
    getAuthorArticles();
  }

  render() {
    const { articles } = this.props;
    const articleUrl = 'http://localhost:9100/article?id=';
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    articles.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    const data = [];
    articles.forEach((item, index) => {
      const article = {};
      article.key = index;
      article.id = item._id;
      article.title = item.title;
      article.content = item.content;
      article.description = item.time;
      data.push(article);
    });
    return (
      <List
        size="large"
        rowKey="id"
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="like-o" text="233" />,
              <IconText type="message" text="233" />,
            ]}
          >
            <List.Item.Meta
              title={(
                <a href={articleUrl + item.id}>
                  {item.title}
                </a>
              )}
              description={item.description}
            />
            <ArticleListContent data={item} />
          </List.Item>
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
