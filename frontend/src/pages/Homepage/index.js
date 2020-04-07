import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaReply } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
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
            
            <div className="detailBox">
              <div className="titleBox">
                <label>CommentBox</label>
                <button type="button" className="close" aria-hidden="true">&times;</button>
              </div>

              <div className="commentBox">
                <p className="taskDescription">
                  Cara morreu em pé kkkkkkkkkkk
                </p>
              </div>

              <div className="actionBox">
                <ul className="commentList">
                  <li>
                    <div className="commenterImage">
                      <img src={dudu} alt=""/>
                    </div>

                    <div className="commentText">
                      <p>foi de fuder ne nao?!</p>
                      <span className="date-sub-text">on April 6th, 2020</span>
                    </div>
                  </li>
                </ul>
              </div>
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