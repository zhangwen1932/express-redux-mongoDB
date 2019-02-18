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
          <a href={articleUrl + `${record._id}`}>查看</a>
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
  return {
    articles: state.admin.allArticles.articles,
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
