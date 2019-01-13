import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../reducers';

class IndexApp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.sendInfo(values.testdata);
      }
    });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { getFieldDecorator } = this.props.form;
    const { test } = this.props;
    console.log('test', test);
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} style={{ margin: 15 }}>
        <Form.Item>
          {getFieldDecorator('testdata', {
            rules: [{ required: true, message: '请输入一段文字' }],
          })(
            <Input placeholder="Test text" />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Click</Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.globalState.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendInfo: bindActionCreators(actions.send_test, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(IndexApp));
