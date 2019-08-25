import React from 'react';
import { Component } from 'react';
import TitleBar from './TitleBar.jsx';
import CallStackVisualizer from './CallStackVisualizer.jsx';
import TreeVisualizer from './TreeVisualizer.jsx';
import Editor from './Editor.jsx';
<<<<<<< HEAD
import '../styles/index.scss';
=======
// import '../styles/index.scss';
>>>>>>> 2db99a90d80a782fff609ba514e1ae8a626bddbe

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
