import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Input, Button,
} from 'antd';
import { actions as UserActions } from '../../../../reducers/adminSetting';
import style from './style.css';

// 头像组件 方便以后独立，增加裁剪之类的功能
class AvatarElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarAddress: '',
    };
  }

  handleChangeAVatar = (event) => {
    const newAddress = event.target.value;
    this.setState({
      avatarAddress: newAddress,
    });
  }

  handleUpadtaAvatar = () => {
    const { avatarAddress } = this.state;
    if (avatarAddress) {
      const { updateAvatar } = this.props;
      updateAvatar(avatarAddress);
    }
  };

  render() {
    const { avatar } = this.props;
    return (
      <Fragment>
        <div className={style.avatar_title}>
          头像
        </div>
        <div className={style.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={style.upload_avatar}>
          <Input placeholder={avatar} alt="图片地址" onChange={this.handleChangeAVatar} />
          <Button className={style.upload_btn} allowclear="true" onClick={this.handleUpadtaAvatar}>更换头像地址</Button>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    avatar: state.admin.user.avatar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAvatar: bindActionCreators(UserActions.updateAvatar, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AvatarElement);
