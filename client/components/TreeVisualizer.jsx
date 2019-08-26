import React from "react";
import { Component } from "react";

class TreeVisualizer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='tree-container'>
        <h3>Tree Visualizer</h3>
        <div id='within-tree'></div>
      </div>
    );
  }
}

export default TreeVisualizer;
