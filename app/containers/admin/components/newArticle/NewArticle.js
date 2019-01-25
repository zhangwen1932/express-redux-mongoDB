import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import style from './style.css';

const { TextArea } = Input;

class UserArticle extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={style.container}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <h3>标题:</h3>
            {
              getFieldDecorator('title', {
                rules: [{ require: true, message: '请输入标题' }],
              })(
                <Input placeholder="标题" />,
              )
            }
          </Form.Item>
          <Form.Item>
            <h3>内容:</h3>
            {
              getFieldDecorator('content', {
                rules: [{ require: true }],
              })(
                <TextArea rows={15} />,
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              发表文章
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'publishArticle' })(UserArticle);
