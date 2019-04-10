import React, { Component, Fragment } from 'react';
// import {
//   Comment, Tooltip, Avatar, Divider,
// } from 'antd';
import dateFormat from 'dateformat';
import {
  Comment, Tooltip, Avatar, Divider,
} from '../../../../lib/antd';


export default class CommentCell extends Component {
  render() {
    const { item } = this.props;
    return (
      <Fragment>
        <Comment
          author={item.nickname}
          avatar={(
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={item.nickname}
            />
          )}
          content={item.content}
          datetime={(
            <Tooltip title="prompt text">
              <span>{dateFormat(item.time, 'mediumDate')}</span>
            </Tooltip>
          )}
        />
        <Divider />
      </Fragment>
    );
  }
}
