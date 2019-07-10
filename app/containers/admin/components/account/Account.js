import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Input, Button,
} from 'antd';
import { actions as UserActions } from '../../../../reducers/adminSetting';
import AvatarElement from './avatarElement';
import style from './style.css';

const FormItem = Form.Item;

class Account extends Component {
  componentDidMount() {
    const { getAuthor } = this.props;
    getAuthor();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    const { updateInfo } = this.props;
    validateFields((err, values) => {
      if (!err) {
        updateInfo(values);
      }
    });
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const {
      nickname, profile, occupation, company, avatar, email,
    } = this.props;
    return (
      <div className={style.container}>
        <div className={style.baseView}>
          <div className={style.left}>
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem label="邮箱">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: '请输入邮箱',
                    },
                  ],
                  initialValue: email,
                })(<Input />)}
              </FormItem>
              <FormItem label="昵称">
                {getFieldDecorator('nickname', {
                  rules: [
                    {
                      required: true,
                      message: '请输入昵称',
                    },
                  ],
                  initialValue: nickname,
                })(<Input />)}
              </FormItem>
              <FormItem label="职务">
                {getFieldDecorator('occupation', {
                  rules: [
                    {
                      required: true,
                      message: '请输入职业',
                    },
                  ],
                  initialValue: occupation,
                })(<Input />)}
              </FormItem>
              <FormItem label="公司">
                {getFieldDecorator('company', {
                  rules: [
                    {
                      required: true,
                      message: '请输入公司信息',
                    },
                  ],
                  initialValue: company,
                })(<Input />)}
              </FormItem>
              <FormItem label="个人简介">
                {getFieldDecorator('profile', {
                  rules: [
                    {
                      required: true,
                      message: '请输入个人简介',
                    },
                  ],
                  initialValue: profile,
                })(
                  <Input.TextArea
                    placeholder="请输入个人简介"
                    rows={4}
                  />,
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">
                更新基本信息
              </Button>
            </Form>
          </div>
          <div className={style.right}>
            <AvatarElement avatar={avatar} />
          </div>
        </div>
      </div>
    );
  }
}

const WrappedAccount = Form.create({ name: 'setting' })(Account);

// export default WrappedAccount;
function mapStateToProps(state) {
  return {
    nickname: state.admin.user.nickname,
    profile: state.admin.user.profile,
    avatar: state.admin.user.avatar,
    occupation: state.admin.user.occupation,
    company: state.admin.user.company,
    email: state.admin.user.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthor: bindActionCreators(UserActions.getAuthor, dispatch),
    updateInfo: bindActionCreators(UserActions.updateInfo, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedAccount);
