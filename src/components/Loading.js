import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    );
  }
}

export default Loading;
