import React from 'react';
import { Component } from 'react';

class CallStackVisualizer extends Component {
  render() {
    // render off mock data, fib(3);
    const calls = [
      { name: 'fib', parent: null, arg: 3, result: 2 },
      { name: 'fib', parent: 3, arg: 2, result: 1 },
      { name: 'fib', parent: 2, arg: 1, result: 1 },
      { name: 'fib', parent: 2, arg: 0, result: 0 },
      { name: 'fib', parent: 3, arg: 1, result: 1 }
    ];
    const callsArr = [];
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
