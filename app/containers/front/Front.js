import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import About from './components/about/About';
// import Article from './components/article/Article';
// import Skill from './components/skill/Skill';
import Footer from './components/footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <About />
        <Footer />
      </div>
    );
  }
}
