import React, { Component } from "react";
import AceEditor from 'react-ace';
import brace from 'brace';
import { render } from 'react-dom';
import 'brace/mode/javascript';

class Editor extends Component {
  constructor(props) {
    super(props);
  }
  clearForm() {
    //Function clears AceEditor form on click of the Clear Button
  }

  submitForm() {
    //Function clears AceEditor form on click of the Clear Button
  }
  
  render() {
    return (
        <div id='editor-component'>
            <div id='ace-editor'>
                <AceEditor mode='javascript' />
            </div>
            <div id='button-container'>
                <button type='button' id='clear' onClick={this.clearForm}>Clear</button>
                <button type='button' id='enter' onClick={this.submitForm}>Submit</button>
            </div>
      </div>
    );
  }
}

export default Editor;
