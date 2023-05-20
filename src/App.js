import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Chat.css'

function App() {
  return (
    <div className="app">
      
      <div className='app-body'>
      <Sidebar />
      <Chat />
      </div>
      
    </div>
  );
}

export default App;