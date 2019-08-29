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
      userInput: '',
      stateFromServer: {}
    };
    this.runFunc = this.runFunc.bind(this);
  }

  runFunc() {
    //Function clears AceEditor form on click of the Clear Button
    let editor = ace.edit('ace-editor');
    let userInput = editor.getSession().getValue();
    userInput = String(userInput);
    //Sanitizes data
    if (userInput[userInput.length - 1] === 'X')
      userInput = userInput.slice(0, -50);
    if (userInput[0] !== 'f')
      userInput = userInput.slice(userInput.indexOf('f'));
    //Updates state with userInput
    console.log(userInput);
    this.setState({ userInput: userInput });
    fetch('/run', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ userInput })
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(e => console.log(e));
    //Clears form
    editor.setValue('');
  }

  render() {
    return (
      <div id='container'>
        <TitleBar />
        <CallStackVisualizer />
        <TreeVisualizer />
        <Editor runFunc={this.runFunc} />
      </div>
    );
  }
}

export default App;
