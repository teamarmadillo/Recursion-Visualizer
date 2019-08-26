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
    this.runFunc = this.runFunc.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  runFunc() {
    //Takes the userInput from the AceEditor, converts it and sends it to the backend

    //gets the userInput value from the aceEditor
    let editor = ace.edit('ace-editor');
    let userInput = editor.getSession().getValue(); 

    //converts the userInput into a string
    userInput = String(userInput);

    //Sends the userInput string to middleware functions to be parsed
    fetch('/run')
    
    //Clears form for next function entry 
    editor.setValue("");
  }

  clearForm() {
    //Clears the form upon click of the Clear Button in Editor Component
    let editor = ace.edit("ace-editor");
    editor.setValue('');
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
