import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import style from './style.css';

class Banner extends React.PureComponent {
  render() {
    const logo = 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png';
    return (
      <div className={style.banner}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          className={style.text}
        >
          <div key="title" className={style.title}>
            <img src={logo} alt="img" />
          </div>
          <div key="content" className={style.content}>
            很高兴来到我的个人网站,我是一个developer
          </div>
          <Button ghost key="button" className={style.button}>
            了解更多
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className={style.icon}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
