import React from 'react';
import { Component } from 'react';

class CallStackVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id='stack-container'>
        <h3>Total Calls</h3>
      </div>
    );
  }
}

export default CallStackVisualizer;
