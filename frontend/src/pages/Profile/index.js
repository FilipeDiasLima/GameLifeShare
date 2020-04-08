import React, {useState} from 'react';
import { IoMdChatbubbles, IoMdSettings } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';


import profileImg from '../../assets/user1.jpg';
import postexe2 from '../../assets/ex2.jpg';


import './styles.css';

export default function Profile(){
  return(
    <div>
      <ul className="navBar">
        <li><a href=""><FiMenu size={26} color="#FFFFFF"/></a></li>
          <li className="profileImg"><a href="/profile"><img src={profileImg} alt="profileimg"/></a></li>
          <li className="logoName"><a href="/home">GameLifeShare</a></li>
          <li className="searchBar"><input type="text" placeholder="Search..."></input></li>
          <li className="settings"><a href=""><IoMdSettings size={26} color="#FFFFFF"/></a></li>
          <li className="chat"><a href=""><IoMdChatbubbles size={26} color="#FFFFFF"/></a></li>
      </ul>

      <div className="header001">

      </div>

      <div className="coverpad">

      </div>

      <div className="coverpadx">
        <img src={postexe2} alt=""/>
      </div>

      <div className="avatar"></div>
      <div className="avatarx"><img src={profileImg} alt=""/></div>

      <div className="username">FelpsDias</div>
      <div className="box11">Timeline</div>      
      <div className="box12">About</div>
      <div className="box13">Friends</div>
      <div className="box14">Posts</div>

    </div>
  )
}