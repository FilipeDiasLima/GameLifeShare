import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

//import logoText from '../../assets/gamelifeshareTextLogo.png';
import logoImg from '../../assets/logo300.png';


export default function Login(){

  /*
  function ValidateEmail(mail) 
  {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }*/

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
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>

      </form>
    </div>
  );
}