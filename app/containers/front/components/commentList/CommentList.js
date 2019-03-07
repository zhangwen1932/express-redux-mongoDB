import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comment from './Comment';
import { actions as CommentActions } from '../../../../reducers/articleComment';

class CommentsList extends Component {
  componentDidMount() {
    const { getCommentsList } = this.props;
    const id = window.location.href.split('id=')[1];
    getCommentsList(id);
  }

  render() {
    const { commentsList } = this.props;
    console.log('commentsList', commentsList);
    return (
      <h1>hello world</h1>
    );
  }
}

function mapStateToProps(state) {
  const { commentsList } = state.comment;
  return {
    commentsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCommentsList: bindActionCreators(CommentActions.getCommentsList, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsList);
