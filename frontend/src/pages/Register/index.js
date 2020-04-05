import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo300.png';

export default function Login(){

  const [name,setName] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      username,
      email,
      password
    };

    try {
      const response = await api.post('/users',data)

      alert(`Conta registrada ${response.data.id}`);

      history.push('/');
    } catch(err){
      alert('Erro');
    }
  }
  
  return(
    <div className="register-container">
      <section className="form">
        <img src={logoImg} alt="LogoGameLifeShare"/>

        <h1>Create your account</h1>
        
        <form onSubmit={handleRegister}>

          <div className="textb">
            <input 
              type="text" 
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              />
          </div>

          <div className="textb">
            <input 
              type="text" 
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              />
          </div>

          <div className="textb">
            <input 
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
             />
          </div>

          <div className="textb">
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
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

        <Link className="back-link"to="/">
            <FiArrowLeft size={16} color="#363636"/>
            Back to Log in
          </Link>
      </section>
    </div>
  )

}