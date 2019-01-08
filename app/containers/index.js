import React, { Component } from 'react';
import { Input, Button } from 'antd';

import style from './style.css';

class IndexApp extends Component {
  handleTest=() => {
    console.log('hello world');
  }

  render() {
    return (
      <div className={style.test}>
        <Input placeholder="Basic usage" style={{ margin: 15 }} />
        <Button type="primary" onClick={this.handleTest}>Click</Button>
      </div>
    );
  }
}

export default IndexApp;
