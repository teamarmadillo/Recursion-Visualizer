import React from "react";
import { Component } from "react";

class TitleBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id='title-container'>
        <h1>RECURSION VISUALIZER</h1>
          <p>
            Enter a function or use one of our pre-loaded ones
            to visualize recursive calls.  
          </p>
      </div>
    );
  }
}

export default TitleBar;