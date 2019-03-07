import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Button, Input, Row, Col,
} from 'antd';
import { actions as CommentActions } from '../../../../reducers/articleComment';

const { TextArea } = Input;

class SubmitComment extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const thistime = new Date();
    const { addComment } = this.props;
    const { form: { validateFieldsAndScroll } } = this.props;
    const id = window.location.href.split('id=')[1];
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const data = {};
        data.nickname = values.username;
        data.email = values.email;
        data.comments = values.comments;
        data.thistime = thistime;
        data.id = id;
        console.log('data', data);
        addComment(data);
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="昵称">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '请输入你的昵称',
            }],
          })(
            <Input placeholder="请输入你的昵称" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="邮箱">
          {getFieldDecorator('email', {
            rules: [{
              required: true,
              message: '请输入你的邮箱',
            }],
          })(
            <Input placeholder="请输入你的邮箱" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="评论">
          {getFieldDecorator('comments', {
            rules: [{
              required: true,
              message: '请输入评论内容',
            }],
          })(
            <TextArea rows={4} placeholder="请输入你的评论" />,
          )}
        </Form.Item>
        <Row>
          <Col span={22} style={{ textAlign: 'right' }}>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
              >
                提交评论
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  const { author, content, time } = state.comment;
  return {
    author,
    content,
    time,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: bindActionCreators(CommentActions.addComment, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create({ name: 'comment' })(SubmitComment));
