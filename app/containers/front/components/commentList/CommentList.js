import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentCell from './CommentCell';
import { actions as CommentActions } from '../../../../reducers/articleComment';

class CommentsList extends Component {
  componentDidMount() {
    const { getCommentsList } = this.props;
    const id = window.location.href.split('id=')[1];
    getCommentsList(id);
  }

  render() {
    const { commentsList } = this.props;
    return (
      <div>
        {(commentsList.length > 0)
          ? (
            <div>
              {
              commentsList.map(item => <CommentCell item={item} key={item.id} />)
              }
            </div>
          )
          : <h1>暂无评论</h1>
        }
      </div>
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
