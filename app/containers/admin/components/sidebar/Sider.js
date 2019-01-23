import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class Sider extends Component {
  render() {
    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>用户列表</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sider;
