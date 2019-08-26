import React from 'react';
import { Component } from 'react';
import TitleBar from './TitleBar.jsx';
import CallStackVisualizer from './CallStackVisualizer.jsx';
import TreeVisualizer from './TreeVisualizer.jsx';
import Editor from './Editor.jsx';
import '../styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : ''
    };
  }
  render() {
    return (
      <div id='container'>
        <TitleBar />
        <CallStackVisualizer />
        <TreeVisualizer />
        <Editor />
      </div>
    )
  }
}

export default App;
