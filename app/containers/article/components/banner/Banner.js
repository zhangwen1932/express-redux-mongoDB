import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Banner extends Component {
  render() {
    const { title } = this.props;
    return (
      <Breadcrumb separator=">">
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item href="http://127.0.0.1:9100/admin/articleList">文章列表</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Banner;
