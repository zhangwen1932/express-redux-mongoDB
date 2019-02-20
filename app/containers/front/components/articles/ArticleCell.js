import React, { Component, Fragment } from 'react';
import { Divider, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as FrontActions } from '../../../../reducers/front';
import style from './style.css';

class ArticleCell extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    this.state = {
      disabled: true,
      like: item.likeCount,
    };
  }

  handleLike = (key) => {
    const { disabled } = this.state;
    if (disabled) {
      const { addLike, item } = this.props;
      const data = item.likeCount + 1;
      addLike(key, data);
      this.setState({
        disabled: false,
        like: data,
      });
      return false;
    }
    return false;
  }

  render() {
    const { item } = this.props;
    const articleUrl = 'http://localhost:9100/article?id=';
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const { like, disabled } = this.state;
    return (
      <Fragment>
        <div>
          <h3>
            <a href={articleUrl + item.id}>{item.title}</a>
          </h3>
          <span>
            {item.description}
          </span>
          <p>{item.content}</p>
          <div onClick={() => this.handleLike(item.id, item.likeCount)}>
            {disabled
              ? <IconText type="like-o" text={item.likeCount} />
              : (
                <div className={style.like}>
                  <Icon type="like-o" className={style.star} />
                  <span>{like}</span>
                </div>
              )}
          </div>
        </div>
        <Divider />
      </Fragment>
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
    addLike: bindActionCreators(FrontActions.addLike, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleCell);
