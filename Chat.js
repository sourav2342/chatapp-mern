import React, { useState } from "react";
//es7 react snippet generator download ES7React/Redux/Graph
import "./Chat.css";

import ChatComponent from "./ChatComponent";

import { RxAvatar } from "react-icons/rx";
import {IoMdAttach} from "react-icons/io";

import {BsThreeDotsVertical} from "react-icons/bs";

import {BiSearchAlt2} from "react-icons/bi";

import {BsMic} from "react-icons/bs";

import axios from "axios";



function Chat({ messages }){

    const [input, setInput] = useState('');

    const sendMessage =(e) =>{
        
        e.preventDefault();

        axios.post('http://localhost:9000/messages/new', {
            message:input,
            name:"sonu",
            timestamp:"ima a demo.."
        });

        setInput('');
    }

    function handleChange(e){
         setInput(e.target.value)
    }
    return (
        <div className='chat'>
            <div className="chat_header">
                <RxAvatar size={30} className="chat-icon"/>
                <div className="chat_headerinfo">
                    <h3>name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    <BiSearchAlt2 className="chat-icon" />
                    <IoMdAttach className="chat-icon"/>
                    <BsThreeDotsVertical className="chat-icon"/>
                </div>

            </div>
            <div className="chat_body">
                {messages ?.map((message) => (
                    <p className="chat_msg">
                    <span className="chat_name">{message.name}</span>
                        {message.message}
                    <span className="chat_time">{message.timestamp}</span>
                    </p>
                ))}
                
            </div>
            

             <div className="chat_footer">
                <form>
                <input 
                value={input} 
                onChange = {handleChange}
                className="type_text" type='text' 
                placeholder='Type message'/>

                <button onClick={sendMessage} type="submit"> Send a message</button>
                <BsMic className="mic"/>
                </form>
             </div>
        </div>
    );
}

export default Chat;