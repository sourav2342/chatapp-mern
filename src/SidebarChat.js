import React from "react";
import "./SidebarChat.css";
import {RxAvatar} from "react-icons/rx";
 

function SidebarChat(){

    return (
        <div className='sidebarChat'>
            <RxAvatar size={29}/>
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>last seen</p>
            </div>
        </div>
    );
}

export default SidebarChat;