import React from "react";

function ChatComponent(){

 return(
    <div className="chat_body">
        <p className="chat_msg">
              <span className="chat_name">jarvis</span>
                    this is a mssg
              <span className="chat_time">{new Date().toUTCString()}</span>
        </p>
    </div>
 ) ; 

}

export default ChatComponent;
