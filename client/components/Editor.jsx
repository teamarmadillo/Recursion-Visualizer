import React, { Component } from "react";
import AceEditor from 'react-ace';
import brace from 'brace';
import { render } from 'react-dom';
import 'brace/mode/javascript';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.clearForm = this.clearForm.bind(this);
  }
  
  clearForm() {
    //Function clears AceEditor form on click of the Clear Button
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
            To clear the form, press the Clear button.</p>
          <button type='button' id='clear' onClick={()=>{this.clearForm();}}>Clear</button>
          <button type='button' id='run' onClick={()=>{this.props.runFunc();}}>Run</button>
        </div>
      </div>
    );
  }
}

export default Editor;
