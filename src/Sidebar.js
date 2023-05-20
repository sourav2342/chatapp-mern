import React from 'react';
import "./Sidebar.css";
import "./SidebarChat";
import {MdOutlineDonutLarge} from "react-icons/md";
import {  MdOutlineMessage } from 'react-icons/md';
import {CiMenuKebab  } from 'react-icons/ci';
import {RxAvatar  } from 'react-icons/rx';
import {BiSearchAlt2} from "react-icons/bi";
import SidebarChat from './SidebarChat';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <RxAvatar className='myreact-icon' size={22}/>
        <div className="sidebar_headerRight">
            <MdOutlineDonutLarge className='myreact-icon' size={21}/>
            <MdOutlineMessage className='myreact-icon' size={21}/>
            <CiMenuKebab className='myreact-icon' size={21}/>
        </div>
      </div>

      <div className="sidebar_search">
           
         <div className='sidebar_searchContainer'>
            <BiSearchAlt2/>
            <input type='text' placeholder='search chat'/>
         </div>   
      </div>

      <div className='sidebar_chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;