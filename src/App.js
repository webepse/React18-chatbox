import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Message from './components/Message';
import Formulaire from './components/Formulaire';
import './App.css';

// firebase 
import database from './base'
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css'

const App = () => {
  let {login} = useParams()
  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})
  const messageRef = useRef()

  useEffect(()=>{
    const dbMessagesRef = ref(database, 'messages')
    // ecouteur d'event de changement de des données
    onValue(dbMessagesRef,(snapshot) => {
      const data = snapshot.val();
      if(data)
      {
        setMessages(data)
      }
    })
  },[])

  const addMessage = (message) => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    Object.keys(newMessages).slice(0,-10).forEach(key => {
      newMessages[key] = null
    })
    set(ref(database,'/'),{
      messages: newMessages
    })
  }

  //fonction qui vérifie si c'est l'utilsateur connecté
  const isUser = myPseudo => myPseudo === pseudo

  const myMessages = Object.keys(messages).map(iteration => (
    <CSSTransition
      timeout={200}
      classNames='fade'
      key={iteration}
    >
      <Message 
        isUser={isUser}
        pseudo={messages[iteration].pseudo}
        message={messages[iteration].message}
      />
    </CSSTransition>
  ))


  return ( 
      <div className="box">
        <div>
          <div className="messages">
            <TransitionGroup className="message">
              {myMessages}
            </TransitionGroup>
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

