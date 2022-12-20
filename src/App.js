import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Message from './components/Message';
import Formulaire from './components/Formulaire';

import './App.css';

const App = () => {
  let {login} = useParams()
  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})

  const addMessage = (message) => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    setMessages({message:newMessages}) 
  }


  return ( 
      <div className="box">
        <div>
          <div className="messages">
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <Formulaire 
          pseudo={pseudo}
          addMessage={addMessage}
        />
    </div>
   );
}
 
export default App;