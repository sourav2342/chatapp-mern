import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Chat.css';
import Pusher from 'pusher-js';
import axios from 'axios';

function App() {
  
  const [messages, setMessages] = useState([]);
  //instead of refetching mssg every time we can fetch mssg once and add new msg we detected
  useEffect(() => {
     axios.get('http://localhost:9000/messages/sync').then( response => {
      setMessages(response.data);
     })
  }, []);


  useEffect(() => {

    const pusher = new Pusher('ee9601d3444281b53cf9', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      
      setMessages([...messages, newMessage])
    });

    return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    };
  } , [messages]);

  console.log(messages);

 

  return (
    <div className="app">
      <div className='app-body'>
      <Sidebar />
      <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;