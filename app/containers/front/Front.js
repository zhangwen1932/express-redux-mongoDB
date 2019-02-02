import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <Content />
        <Footer />
      </div>
    );
  }
}
