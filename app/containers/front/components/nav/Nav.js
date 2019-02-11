import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';

import style from './style.css';

const { Item } = Menu;

class Header extends Component {
  render() {
    const ImgUrl = 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg';
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        className={style.header}
      >
        <div className={style.page}>
          <TweenOne
            animation={{ x: -30, type: 'form', ease: 'easeOutQuad' }}
            className={style.logo}
          >
            <img width="100%" src={ImgUrl} alt="img" />
          </TweenOne>
          <TweenOne
            className={style.menu}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
          >
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['0']}
              theme="default"
            >
              <Item key="0">首页</Item>
              <Item key="2">我的博客</Item>
              <Item key="3">联系我</Item>
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
