import React, { Component, Fragment } from 'react';
import { Divider, Icon } from 'antd';

import style from './style.css';

class ArticleCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
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
    const { disabled } = this.state;
    return (
      <Fragment>
        <div>
          <h3>
            <a href={articleUrl + item.id} className={style.title}>{item.title}</a>
          </h3>
          <span className={style.time}>
            {item.time}
          </span>
          <p className={style.content}>{item.content}</p>
          <div className={style.action}>
            <div className={style.likeButton} onClick={() => this.handleLike(item.id, item.likeCount)}>
              {disabled
                ? <IconText type="like-o" text={item.likeCount} />
                : (
                  <div className={style.like}>
                    <Icon type="like-o" className={style.star} />
                    <span>{item.likeCount}</span>
                  </div>
                )}
            </div>
            |
            <div className={style.commentButton}>
              <IconText type="message" text={item.commentsCount} />
            </div>
          </div>
        </div>
        <Divider />
      </Fragment>
    );
  }
}

export default ArticleCell;
