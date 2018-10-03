import React, { Component } from 'react';

import Header from '../template/Header';
import Footer from '../template/Footer';

import MainProduct from './MainProduct';
import Review from './Review';
import SubProduct from './SubProduct';

import 'semantic-ui-css/semantic.css';
import {} from 'semantic-ui-react';

class Content extends Component {
  render() {
    return (
      <div>
        <MainProduct />
        <SubProduct />
        <Review />
      </div>
    );
  }
}

export default class Xx extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}