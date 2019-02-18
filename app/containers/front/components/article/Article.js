import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb, Icon, Divider } from 'antd';

import { actions as Frontactions } from '../../../../reducers/articleDetail';

class Article extends Component {
  componentDidMount() {
    const { getArticle } = this.props;
    const id = window.location.href.split('=')[1];
    console.log('id', id);
    getArticle(id);
  }

  render() {
    const { title, content } = this.props;
    return (
      <Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="http://localhost:9100/">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="file-text" />
            <span>文章详情</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Divider />
        <h1>{title}</h1>
        {content}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { title, content } = state.article;
  return {
    title,
    content,
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
