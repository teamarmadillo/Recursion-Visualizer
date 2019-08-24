import React from "react";
import { Component } from "react";

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='title-bar'>
                <h3>Recursion Visualizer</h3>
                <p>
                  Recursion can be difficult to visualize.
                  Enter a function or use one of our pre-loaded functions
                  to visualize a recursive function.  
                </p>
            </div>
        );
    }
}

export default TitleBar;