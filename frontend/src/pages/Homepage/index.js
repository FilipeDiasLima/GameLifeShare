import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaReply } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { IoMdChatbubbles, IoMdSettings } from 'react-icons/io';

import ex1 from '../../assets/dudumorto.jpg';
import ex2 from '../../assets/ex2.jpg';
import profileImg from '../../assets/user1.jpg';
import dudu from '../../assets/dudu.jpg';
import api from '../../services/api';
import './styles.css';


export default function Homepage(){
  return (
    <div>
      <ul className="navBar">
        <li><a href=""><FiMenu size={26} color="#FFFFFF"/></a></li>
          <li className="profileImg"><a href="/profile"><img src={profileImg} alt="profileimg"/></a></li>
          <li className="logoName"><a href="/home">GameLifeShare</a></li>
          <li className="searchBar"><input type="text" placeholder="Search..."></input></li>
          <li className="settings"><a href=""><IoMdSettings size={26} color="#FFFFFF"/></a></li>
          <li className="chat"><a href=""><IoMdChatbubbles size={26} color="#FFFFFF"/></a></li>
      </ul>

      <div className="post-container">
          <ul>

            <div className="post-midia-container">
              <li>
                <header>   
                  <a href="/profile">
                    <img src={profileImg} alt=""/>
                  </a>
                  <div className="user-info">
                    <strong>FelpsDias</strong>
                    <span>Online</span>
                  </div>
                </header>

                <main>
                  <a href={ex1} target="_blank">
                    <img src={ex1} alt=""/>
                  </a>
                </main>
              </li>


            </div>

            <div className="comment-container">
              <ul>
                <div className="comments-list">
                  <li>
                    <div className="comment-individual">
                      <header>
                        <a href="/profile">
                          <img src={dudu} alt=""/>
                        </a>
                        <div className="user-info">
                          <strong>Dudu</strong>
                          <span>há 20 minutos</span>
                        </div>
                      </header>

                      <main>
                        <div className="comment-text">
                          <p>puta merda, legenda que nao sai, caralho</p>
                        </div>
                      </main>
                    </div>
                  </li>


                  <li>
                    <div className="comment-individual">
                      <header>
                        <a href="/profile">
                          <img src={dudu} alt=""/>
                        </a>
                        <div className="user-info">
                          <strong>Dudu</strong>
                          <span>há 20 minutos</span>
                        </div>
                      </header>

                      <main>
                        <div className="comment-text">
                          <p>puta merda, legenda que nao sai, caralho</p>
                        </div>
                      </main>
                    </div>
                  </li>

                  <li>
                    <div className="comment-individual">
                      <header>
                        <a href="/profile">
                          <img src={dudu} alt=""/>
                        </a>
                        <div className="user-info">
                          <strong>Dudu</strong>
                          <span>há 20 minutos</span>
                        </div>
                      </header>

                      <main>
                        <div className="comment-text">
                          <p>puta merda, legenda que nao sai, caralho</p>
                        </div>
                      </main>
                    </div>
                  </li>

                  <li>
                    <div className="comment-individual">
                      <header>
                        <a href="/profile">
                          <img src={dudu} alt=""/>
                        </a>
                        <div className="user-info">
                          <strong>Dudu</strong>
                          <span>há 20 minutos</span>
                        </div>
                      </header>

                      <main>
                        <div className="comment-text">
                          <p>puta merda, legenda que nao sai, caralho</p>
                        </div>
                      </main>
                    </div>
                  </li>

                  <li>
                    <div className="comment-individual">
                      <header>
                        <a href="/profile">
                          <img src={dudu} alt=""/>
                        </a>
                        <div className="user-info">
                          <strong>Dudu</strong>
                          <span>há 20 minutos</span>
                        </div>
                      </header>

                      <main>
                        <div className="comment-text">
                          <p>puta merda, legenda que nao sai, caralho</p>
                        </div>
                      </main>
                    </div>
                  </li>

                  <li>
                    <div className="comment-individual">
                      <header>
                        <a href="/profile">
                          <img src={dudu} alt=""/>
                        </a>
                        <div className="user-info">
                          <strong>Dudu</strong>
                          <span>há 20 minutos</span>
                        </div>
                      </header>

                      <main>
                        <div className="comment-text">
                          <p>puta merda, legenda que nao sai, caralho</p>
                        </div>
                      </main>
                    </div>
                  </li>

                 
                  

              </div>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}