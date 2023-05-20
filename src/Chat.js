import React from "react";
//es7 react snippet generator download ES7React/Redux/Graph
import "./Chat.css";

import ChatComponent from "./ChatComponent";

import { RxAvatar } from "react-icons/rx";

import {IoMdAttach} from "react-icons/io";

import {BsThreeDotsVertical} from "react-icons/bs";

import {BiSearchAlt2} from "react-icons/bi";

import {AiOutlineSend} from "react-icons/ai";


function Chat(){

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
            <ChatComponent />

             <div className="chat_footer">
                <form>
                <input className="type_text" type='text' placeholder='Type message'/>
                <AiOutlineSend  className="send_button"/>
                </form>
             </div>
        </div>
    );
}

export default Chat;