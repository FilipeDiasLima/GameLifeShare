import React, {useState} from 'react';
import { IoMdChatbubbles, IoMdSettings, IoIosSearch } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';


import avatar from '../../assets/user1.jpg';
import postexe2 from '../../assets/ex2.jpg';


import './styles.css';

export default function Profile(){
  return(
    /*Top bar */
    <div className="topBar">
      <ul>
        <li className="menuIcon"><a href=""><FiMenu size={28} color="#FFFFFF"/></a></li>
        <a href="/profile"><img src={avatar} alt="profileimg"/></a>
        <li className="logoName"><a href="/home">GamingShare</a></li>
        <li className="searchBar"><input type="text" placeholder="Search..."></input></li>
        <li className="searchIcon"><a href=""><IoIosSearch size={28} color="#FFFFFF"/></a></li>
        <li className="settingsIcon"><a href=""><IoMdSettings size={28} color="#FFFFFF"/></a></li>
        <li className="chatIcon"><a href=""><IoMdChatbubbles size={28} color="#FFFFFF"/></a></li>
      </ul>

      <div className="header001">

      </div>

      <div className="coverpad">

      </div>

      <div className="coverpadx">
        <img src={postexe2} alt=""/>
        <img src={postexe2} alt=""/>
      </div>

      <div className="avatar"></div>
      <div className="avatarx"><img src={avatar} alt=""/></div>

      <div className="username">FelpsDias</div>
      <div className="box11">Timeline</div>      
      <div className="box12">About</div>
      <div className="box13">Friends</div>
      <div className="box14">Posts</div>

    </div>
  )
}