import React from 'react';
import { Component } from 'react';

class CallStackVisualizer extends Component {
  render() {
    const callsArr = [];
    const { calls } = this.props;
    for (let i = 0; i < calls.length; i += 1) {
      callsArr.push(
        <div className='callstack-frame'>
          {`${calls[i].name}(${calls[i].arg})`}
        </div>
      );
    }

    return (
      <div id='stack-container'>
        <h2>Total Calls</h2>
        {callsArr}
      </div>
    );
  }
}

export default CallStackVisualizer;
