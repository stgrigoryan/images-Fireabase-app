import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Images,Statistics} from '../../views/';

class Content extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <Route path="/" exact component={Images} />
        <Route path="/statistics" component={Statistics} />
      </div>
    );
  }
}

export default Content;
