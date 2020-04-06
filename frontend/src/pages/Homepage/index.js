import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdChatbubbles, IoMdSettings } from 'react-icons/io';

import exPost from '../../assets/dudumorto.jpg';
import profileImg from '../../assets/user1.jpg';
import dudu from '../../assets/dudu.jpg';
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

      <main>
        <ul>

{/*=====================================================*/}
          <li className="post-item">
            <header>
              <a href="">
               <img src={profileImg} alt="FelpsDias"/>
              </a>
              <div className="user-info">
                <strong>FelpsDias</strong>
                <span>Online</span>
              </div>
            </header>
            <div className="postImg">
              <a href="">
                <img src={exPost} alt="postImg"/>
              </a>
            </div>

            {/* comments */}
            <div className="comments-container">
              <h1>Comments</h1>
              
              <ul id="comments-list" className="comments-list">

                <li>
                  <div className="comment-main-level">
                    
                    {/* avatar */}
                    <div className="comment-avatar">
                      <a href="">
                        <img src={dudu} alt=""/>
                      </a>
                    </div>

                    {/*comment container */}
                    <div className="comment-box">

                      <div className="comment-head">
                        <a href=""> <h6>Dudu</h6> </a>
                        <span>há 14 min</span>
                        <i className="reply"/>
                        <i className="like"/>
                      </div>

                      <div className="comment-content">
                        Poha lek, essa foi de fude neguin kkkkkk
                      </div>  
                    </div>
                  </div>

                {/* comment responses */}
                <ul className="comments-list_reply-list">
                  <li>
                    {/* avatar */}
                    <div className="comment-avatar">
                      <a href="">
                        <img src={profileImg} alt=""/>
                      </a>
                    </div>
                    
                    {/*comment container */}
                    <div className="comment-box">

                      <div className="comment-head">
                        <a href=""> <h6>FelpsDias</h6> </a>
                        <span>há 10 min</span>
                        <i className="like"/>
                      </div>

                      <div className="comment-content">
                        Cara morreu em pé kkkk
                      </div>  
                    </div>

                  </li>
                </ul>
                </li>
              </ul>
            </div>
          </li>

{/*=====================================================*/}
          <li className="post-item">
            <header>
              <a href="">
               <img src={profileImg} alt="FelpsDias"/>
              </a>
              <div className="user-info">
                <strong>FelpsDias</strong>
                <span>Online</span>
              </div>
            </header>
            <div className="postImg">
              <a href="">
                <img src={exPost} alt="postImg"/>
              </a>
            </div>
          </li>
      
{/*=====================================================*/}
          <li className="post-item">
            <header>
              <a href="">
               <img src={profileImg} alt="FelpsDias"/>
              </a>
              <div className="user-info">
                <strong>FelpsDias</strong>
                <span>Online</span>
              </div>
            </header>
            <div className="postImg">
              <a href="">
                <img src={exPost} alt="postImg"/>
              </a>
            </div>
          </li>

{/*=====================================================*/}

        </ul>
      </main>
    </div>
  )
}