import React, { Component } from 'react';
import Message from './components/Message';
import Formulaire from './components/Formulaire';

import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="box">
        <div>
          <div className="messages">
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <Formulaire />
      </div>
    );
  }
}
 
export default App;
