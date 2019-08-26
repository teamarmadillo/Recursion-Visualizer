import React, { Component } from "react";
import AceEditor from 'react-ace';
import brace from 'brace';
import { render } from 'react-dom';
import 'brace/mode/javascript';
import { throws } from "assert";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.runFunc = this.runFunc.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  runFunc() {
    let editor = ace.edit('ace-editor');
    let userInput = editor.getSession().getValue();
    this.setState(state=>({
      userInput: String(userInput)
    }));
    editor.setValue('');
  }

  clearForm(){
    let editor = ace.edit("ace-editor");
    editor.setValue('');
  }

  render() {
    return (
      <div id='editor-container'>
        <div id='ace-editor'>
          <AceEditor mode='javascript' />
        </div>
        <div id='button-container'>
          <p>
            Please enter the recursive function you would like
            to see visualized, and then press Run. <br /><br />
            To clear the form, press the Clear button.
          </p>
          <button type='button' id='clear' onClick={this.clearForm}>Clear</button>
          <button type='button' id='run' onClick={this.runFunc}>Run</button>
        </div>
      </div>
    );
  }
}

export default Editor;


