import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './style.css';
import Banner from './components/adminBanner/AdminBanner';

import { actions } from '../../../../reducers/articleDetail';

class Article extends Component {
  componentDidMount() {
    const url = window.location.href;
    const id = url.split('=')[1];
    const { getArticle } = this.props;
    const { title, content } = this.props;
    if (!content && !title) {
      getArticle(id);
    }
  }

  render() {
    const { title, content } = this.props;
    return (
      <div className={style.box}>
        <Banner title={title} />
        <div className={style.container}>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
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
    getArticle: bindActionCreators(actions.getArticle, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
