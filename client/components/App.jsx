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
    userInput = String(userInput); // seems that we are getting the user's input and converting it into a string
    // =========
    /*
    the code commented below ('sanitizes data') => right now, Ace-Editor is sending back 50 Xs, and also includes the line numbers.
    need to figure out a way to clean this up. Also, in runFunc above, ace.edit() <--- what even is that?
    need to clean this logic and get it to accept user input in a tighter fashion. Possibly swap out for a different text editor?
    if this isn't working by lunch, lets pivot and use a different code editor. 
    NOTE: the following link has some sort of documentation RE ace.edit :: https://ace.c9.io/#nav=api&api=ace
    
    */
    // =========
    //Sanitizes data
    // if (userInput[userInput.length - 1] === 'X') // 
      // userInput = userInput.slice(0, -50);
    // if (userInput[0] !== 'f')
      // userInput = userInput.slice(userInput.indexOf('f'));
    //Updates state with userInput
    this.setState({ userInput: userInput });
    fetch('/run', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ userInput })
    })
      .then(response => response.json())
      .then(response => console.log(response));
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
