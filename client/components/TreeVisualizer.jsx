import React from "react";
import { Component } from "react";
import Tree from 'react-tree-graph';
// import '../../node_modules/react-tree-graph/dist'

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
      "name":"factorial(4) Result = 55296",
      "children":[
          {
              "name":"factorial(3) Result = 24",
              "children":[
                  {
                      "name":"factorial(2) Result = 2",
                      "children":[
                          {
                              "name":"factorial(1) Result = 1"
                          },
                          {
                              "name":"factorial(0) Result = 0"
                          },
                          {
                              "name":"factorial(-1) Result = -1"
                          }
                      ]
                  },
                  {
                      "name":"factorial(1) Result = 1"
                  },
                  {
                      "name":"factorial(0) Result = 0"
                  }
              ]
          },
          {
              "name":"factorial(2) Result = 2",
              "children":[
                  {
                      "name":"factorial(1) Result = 1"
                  },
                  {
                      "name":"factorial(0) Result = 0"
                  },
                  {
                      "name":"factorial(-1) Result = -1"
                  }
              ]
          },
          {
              "name":"factorial(1) Result = 1"
          }
      ]
  };

    return (
      <div className=''>
        <Tree
          data={data}
          height={700}
          width={1200}
          animated={true}
          nodeOffset={25}
          nodeRadius={5}
          // circleProps={{key: 1}}
          gProps={{ className: 'node' }}
          pathProps={{ className: 'link' }	}
          margins={{ bottom : 50, left : 20, right : 200, top : 5}}
          />
      </div>
    );
  }
}

export default TreeVisualizer;
