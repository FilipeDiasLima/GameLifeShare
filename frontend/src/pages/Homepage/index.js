import React, {useState} from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiFillLike } from 'react-icons/ai';
import { IoMdDownload, IoMdMore, IoMdChatbubbles, IoMdSettings, IoIosSearch, IoMdSend } from 'react-icons/io';
/*import { Link, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaReply } from 'react-icons/fa';
*/

import avatar from '../../assets/user1.jpg';
import ex1 from '../../assets/postRE.jpg';
import dudu from '../../assets/dudu.jpg';

/*
import ex2 from '../../assets/ex2.jpg';

import api from '../../services/api';
*/

import './styles.css';


export default function Homepage(){
  return (
<>
      <div className="topBar">
        <ul>
          <li className="menuIcon"><a href=""><FiMenu size={28} color="#FFFFFF"/></a></li>
          <a href="/profile"><img src={avatar} alt=""/></a>
          <li className="logoName"><a href="/home">GamingShare</a></li>
          <li className="searchBar"><input type="text" placeholder="Search..."/></li>
          <li className="searchIcon"><a href=""><IoIosSearch size={28} color="#FFFFFF"/></a></li>
          <li className="settingsIcon"><a href=""><IoMdSettings size={28} color="#FFFFFF"/></a></li>
          <li className="chatIcon"><a href=""><IoMdChatbubbles size={28} color="#FFFFFF"/></a></li>
        </ul>
      </div>

      <div className="boxPost">
        <header>
            <a href="/profile"><img src={avatar} alt=""/></a>
            <div className="user-info">
              <a href="/profile"><strong>FelpsDias</strong></a>
              <span>Online</span>
            </div>
          </header>

          <div className="imgPost">
            <a href={ex1}><img src={ex1} alt=""/></a>
          </div>

          <div className="subtitlePost">
            <input type="text" placeholder=" Subtitle..."/>
          </div>

          <div className="boxComments">
            <div className="boxComment">
              <header className="headerComment">
                <a className="avatarComment" href="/profile"><img src={dudu} alt=""/></a>
                <div>
                  <a href="/profile"><strong>Dudu</strong></a>
                </div>
              </header>
              
              <p>Esse jogo me é familiar, acho q ja vi... a pô é a bosta q eu cago que é igualzinha =)</p>
            </div>
          </div>

          <li className="commentsList">
            <div className="boxComments">
              <div className="boxComment">
                <header className="headerComment">
                  <a className="avatarComment" href="/profile"><img src={dudu} alt=""/></a>
                  <div>
                    <a href="/profile"><strong>Dudu</strong></a>
                  </div>
                </header>
                
                <p>Esse jogo me é familiar, acho q ja vi... a pô é a bosta q eu cago que é igualzinha =)</p>
              </div>
            </div>
          </li>

          

          <div className="boxInputComment">
            <input type="text" placeholder="   Write a comment..." className="inputComment"/>
            <button type="submit"><a href=""><IoMdSend size={23} color="#FFF"/></a></button>
          </div>

          <div className="boxIconStatus">
            <a className="like" href=""><AiFillLike size={30} color="#FFF "/></a>
            <a className="download" href=""><IoMdDownload size={30} color="#FFF"/></a>
            <a className="more" href=""><IoMdMore size={40} color="#FFF"/></a>
          </div>

      </div>
</>

  );
}