import React from "react";
import { Component } from "react";

class TitleBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='title-container'>
        <h1>Recursion Visualizer</h1>
          <p>
            Enter a function or use one of our pre-loaded functions
            to visualize a recursive function.  
          </p>
      </div>
    );
  }
}

export default TitleBar;