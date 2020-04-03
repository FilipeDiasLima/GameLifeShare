import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

//import logoText from '../../assets/gamelifeshareTextLogo.png';
import logoImg from '../../assets/logo300.png';


export default function Login(){

  

  return(
    <div className="login-container">
      <form>

        <img src={logoImg} alt="LogoGLS"/>
        
        <h1>GameLifeShare</h1>

        <div className="textb">
          <input type="text" placeholder="Username"/>
        </div>

        <div className="textb">
          <input type="password" placeholder="Password"/>
        </div>

        <input type="submit" className="logbutton" value="Login"/>

        <div className="bottom-text">
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </form>
    </div>
  )
}