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
    setMessages(newMessages) 
  }

  const myMessages = Object.keys(messages).map(iteration => (
    <Message 
      key={iteration}
      // messages.message-12165159.pseudo
      // messages.iteration.pseudo
      // message[iteration].pseudo
      pseudo={messages[iteration].pseudo}
      message={messages[iteration].message}
    />
  ))


  return ( 
      <div className="box">
        <div>
          <div className="messages">
            {myMessages}
          </div>
        </div>
        <Formulaire
          length={140} 
          pseudo={pseudo}
          addMessage={addMessage}
        />
    </div>
   );
}
 
export default App;