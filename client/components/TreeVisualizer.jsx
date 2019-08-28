import React from "react";
import { Component } from "react";
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
      name: 'Parent',
      children: [{
        name: 'Child One'
      }, {
        name: 'Child Two'
      }]
    };

    return (
      <div>
        <p>HELLO WORLD</p>
        {/* <Tree
          data={data}
          height={200}
          width={400}/> */}
      </div>
    );
  }
}

export default TreeVisualizer;
