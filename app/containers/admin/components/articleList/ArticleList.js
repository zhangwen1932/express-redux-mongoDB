import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { List } from 'antd';

import { actions as ArticleActions } from '../../../../reducers/adminALLArticles';
import style from './style.css';

class ArticleList extends Component {
  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { articles } = this.props;
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
            dataSource={articles}
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
