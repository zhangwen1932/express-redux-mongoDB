import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'antd';

import { actions as ArticleActions } from '../../../../reducers/adminALLArticles';
import style from './style.css';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
    const { articles } = this.props;
    console.log('articles', articles);
    this.setState({
      listData: articles.list,
    });
  }

  render() {
    const { listData } = this.state;
    return (
      <div className={style.container}>
        <div className={style.box}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { articles } = state.admin.allArticles;
  return {
    articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: bindActionCreators(ArticleActions.allArticle, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList);
