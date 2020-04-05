import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdChatbubbles, IoMdSettings } from 'react-icons/io';

import exPost from '../../assets/dudumorto.jpg';
import profileImg from '../../assets/user1.jpg';
import api from '../../services/api';
import './styles.css';


export default function Homepage(){
  return (
      <div>
        <ul className="navBar">
          <li><a href=""><FiMenu size={26} color="#FFFFFF"/></a></li>
            <li className="profileImg"><a href="/home"><img src={profileImg} alt="profileimg"/></a></li>
            <li className="logoName"><a href="/home">GameLifeShare</a></li>
            <li className="searchBar"><input type="text" placeholder="Search..."></input></li>
            <li className="settings"><a href=""><IoMdSettings size={26} color="#FFFFFF"/></a></li>
            <li className="chat"><a href=""><IoMdChatbubbles size={26} color="#FFFFFF"/></a></li>
        </ul>

        <div className="page-container">
          <ul className="post-container">
            <li><a href=""><img src={profileImg} alt="postimgprofile"/></a></li>
            <li><a href=""><text>FelpsDias</text></a></li>
            <li><a href=""><img src={exPost} alt="postImg"/></a></li>
          </ul>
        </div>
      </div>
  )
}