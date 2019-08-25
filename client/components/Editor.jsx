import React, { Component } from "react";
import AceEditor from 'react-ace';
import brace from 'brace';
import { render } from 'react-dom';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Editor extends Component {
  constructor(props) {
    super(props);
  }
  clearForm() {
    //Function clears AceEditor form on click of the Clear Button
  }

  runFunc() {
    //Function clears AceEditor form on click of the Clear Button
  }

  render() {
    return (
      <div id='editor-container'>
        <div id='ace-editor'>
          <AceEditor mode='javascript' theme='monokai' />
        </div>
        <div id='button-container'>
          <p>
            Please enter the recursive function you would like
            to see visualized, and then press Run. <br /><br />
            To clear the form, press the Clear button.</p>
          <button type='button' id='clear'>Clear</button>
          <button type='button' id='run'>Run</button>
        </div>
      </div>
    );
  }
}

export default Editor;
