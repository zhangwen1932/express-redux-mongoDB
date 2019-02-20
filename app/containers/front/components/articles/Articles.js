import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Icon } from 'antd';

import ArticleListContent from './ArticleContent';
import { actions as FrontActions } from '../../../../reducers/front';
import style from './style.css';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      disabled: true,
    };
  }

  componentDidMount() {
    const { getAuthorArticles } = this.props;
    getAuthorArticles();
  }

  handleLike = (e) => {
    const { like, disabled } = this.state;
    if (disabled) {
      const data = like + 1;
      this.setState({
        like: data,
        disabled: false,
      });
    } else {
      e.preventDefault();
    }
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
      article.likeCount = item.likeCount;
      data.push(article);
    });
    const { like, disabled } = this.state;
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
              <div onClick={this.handleLike}>
                {disabled
                  ? <IconText type="like-o" text={like} />
                  : (
                    <div className={style.like}>
                      <Icon type="like-o" className={style.star} />
                      <span>{like}</span>
                    </div>
                  )}
              </div>,
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
