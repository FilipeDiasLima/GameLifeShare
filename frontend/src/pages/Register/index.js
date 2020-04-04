import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo300.png';

export default function Login(){

  
  return(
    <div className="register-container">
      <section className="form">
        <img src={logoImg} alt="LogoGameLifeShare"/>

        <form>

          <h1>Create your account</h1>

          <div className="textb">
            <input type="text" placeholder="Name"/>
          </div>

          <div className="textb">
            <input type="text" placeholder="Username"/>
          </div>

          <div className="textb">
            <input type="email" placeholder="E-mail"/>
          </div>

          <div className="textb">
            <input type="password" placeholder="Password"/>
          </div>

          <div className="bottom-text">
          <input 
              type="checkbox" 
              value="check"
            />
            I have read and agree to the Terms and Conditions and Privacy Policy
          
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </section>
    </div>
  )

}