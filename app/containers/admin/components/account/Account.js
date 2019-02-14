import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Input, Upload, Button,
} from 'antd';
import { actions as UserActions } from '../../../../reducers/adminSetting';
import style from './style.css';

const FormItem = Form.Item;

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = (props) => {
  const { avatar } = props;
  return (
    <Fragment>
      <div className={style.avatar_title}>
      头像
      </div>
      <div className={style.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload fileList={[]}>
        <div className={style.button_view}>
          <Button icon="upload">
          更换头像
          </Button>
        </div>
      </Upload>
    </Fragment>
  );
};

class Account extends Component {
  componentDidMount() {
    const { getAuthor } = this.props;
    getAuthor();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const {
      nickname, profile, occupation, company, avatar,
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
                {getFieldDecorator('intro', {
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
              <Button type="primary">
                更新基本信息
              </Button>
            </Form>
          </div>
          <div className={style.right}>
            <AvatarView avatar={avatar} />
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthor: bindActionCreators(UserActions.getAuthor, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedAccount);
