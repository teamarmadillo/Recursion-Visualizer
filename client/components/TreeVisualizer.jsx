import React from 'react';
import { Component } from 'react';
import Tree from 'react-tree-graph';

class TreeVisualizer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='tree-container'>
        <Tree
          data={this.props.data}
          height={700}
          width={1000}
          animated={true}
          nodeOffset={25}
          nodeRadius={5}
          // circleProps={{key: 1}}
          gProps={{ className: 'node' }}
          pathProps={{ className: 'link' }}
          margins={{ bottom: 50, left: 20, right: 200, top: 5 }}
        />
      </div>
    );
  }
}

export default TreeVisualizer;
