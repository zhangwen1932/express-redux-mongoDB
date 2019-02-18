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
    return (
      <List
        size="large"
        rowKey="id"
        itemLayout="vertical"
        dataSource={articles}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="star-o" text="156" />,
              <IconText type="like-o" text="233" />,
              <IconText type="message" text="233" />,
            ]}
          >
            <List.Item.Meta
              title={(
                <a href={articleUrl + item._id}>
                  {item.title}
                </a>
              )}
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
