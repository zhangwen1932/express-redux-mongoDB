import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Row, Col,
} from 'antd';

import Article from './components/article/Article';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';


import styles from './style.less';

class Front extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Sidebar />
          </Col>
          <Col lg={17} md={24}>
            <Switch>
              <Route path="/article" component={Article} />
              <Route path="/" component={Home} />
              <Route path="/home" component={Home} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Front;
