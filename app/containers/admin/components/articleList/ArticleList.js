import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Table } from 'antd';

import { actions as ArticleActions } from '../../../../reducers/adminALLArticles';
import style from './style.css';

class ArticleList extends Component {
  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { articles } = this.props;
    const articleUrl = 'http://localhost:9100/adminArticle?id=';
    const columns = [{
      title: '文章标题',
      dataIndex: 'title',
    }, {
      title: '发表时间',
      dataIndex: 'time',
    }, {
      title: 'Action',
      dataIndex: '',
      width: 360,
      render: record => (
        <span>
          <a href={articleUrl + `${record.id}`}>查看</a>
        </span>
      ),
    }];
    return (
      <div className={style.container}>
        <div className={style.box}>
          <Table columns={columns} dataSource={articles} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { articles } = state.admin.allArticles;
  const data = [];
  articles.forEach((item, index) => {
    const article = {};
    article.key = index;
    article.id = item._id;
    article.title = item.title;
    article.content = item.content;
    article.time = item.time;
    data.push(article);
  });
  data.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return {
    articles: data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllArticles: bindActionCreators(ArticleActions.getAllArticles, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList);
