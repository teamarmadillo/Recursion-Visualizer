import React from 'react';
import { Component } from 'react';
import Tree from 'react-tree-graph';

// require('./treant-js/vendor/raphael.js');
// require('./treant-js/Treant.js');
// require('./recursion_related/treantConfigGen.js');
// require('./recursion_related/presetRecursionFuncs.js');

class TreeVisualizer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      name: 'fib3(3) Result = 2',
      children: [
        {
          name: 'fib2(2) Result = 1',
          children: [
            {
              name: 'fib1(1) Result = 1'
            },
            {
              name: 'fib0(0) Result = 0'
            }
          ]
        },
        {
          name: 'fib1(1) Result = 1'
        }
      ]
    };

    return (
      <div id='tree-container'>
        <Tree
          data={data}
          height={500}
          width={850}
          animated={true}
          nodeOffset={20}
          nodeRadius={7}
        />
      </div>
    );
  }
}

export default TreeVisualizer;
