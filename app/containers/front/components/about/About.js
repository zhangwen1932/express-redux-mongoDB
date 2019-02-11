import React, { Component } from 'react';
import style from './style.css';

export default class Content extends Component {
  render() {
    const imgSrc = 'https://wx2.sinaimg.cn/mw1024/7b6e3c13gy1fzweami11xj20hs0hs768.jpg';
    return (
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.title}>
            <h1>About Me</h1>
          </div>
          <div className={style.content}>
            <div className={style.image}>
              <img alt="img" src={imgSrc} />
            </div>
            <div className={style.intro}>
              <h1>Hello!</h1>
              <h1>I&apos;m Wendy</h1>
              <p>这里是一长串的个人简介</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
