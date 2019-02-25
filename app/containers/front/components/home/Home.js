import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Card,
} from 'antd';
import { actions as FrontActions } from '../../../../reducers/front';
import Articles from '../articles/Articles';
import Projects from '../projects/Projects';


class Home extends Component {
  componentDidMount() {
    const { getAuthorArticles } = this.props;
    getAuthorArticles();
  }

  onTabChange = (key) => {
    const { changeLocation, history } = this.props;
    changeLocation(key);
    history.push(key); // 这块做跳转
  }

  render() {
    const {
      total,
    } = this.props;
    const operationTabList = [
      {
        key: '/articleslist',
        tab: (
          <span>
            文章
            <span style={{ fontSize: 14 }}>
              (
              {total}
              )
            </span>
          </span>
        ),
      },
      {
        key: '/projects',
        tab: (
          <span>
            项目
            <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
    ];
    return (
      <Card
        bordered={false}
        tabList={operationTabList}
        onTabChange={(key) => { this.onTabChange(key, 'key'); }}
      >
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/home" component={Articles} />
          <Route path="/articleslist" component={Articles} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const {
    total,
  } = state.front;
  return {
    total,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuthorArticles: bindActionCreators(FrontActions.getAuthorArticles, dispatch),
    changeLocation: bindActionCreators(FrontActions.changeLocation, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
