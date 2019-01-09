import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../reducers';

const { send_test: sendTest } = actions;

class IndexApp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // eslint-disable-next-line react/destructuring-assignment
        this.props.send_test(values);
      }
    });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} style={{ margin: 15 }}>
        <Form.Item>
          {getFieldDecorator('text', {
            rules: [{ required: true, message: '请输入一段文字' }],
          })(
            <Input placeholder="Username" />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Click</Button>
        </Form.Item>
      </Form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    send_test: bindActionCreators(sendTest, dispatch),
  };
}
export default connect(
  mapDispatchToProps,
)(Form.create()(IndexApp));
