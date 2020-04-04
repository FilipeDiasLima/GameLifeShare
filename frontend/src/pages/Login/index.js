import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo300.png';


export default function Login(){
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('login',{username, password});

      localStorage.setItem('username',username);
      localStorage.setItem('password',password);
      localStorage.setItem('email',response.data.password);


      history.push('/homepage');

    }catch(err){
      alert('Falha no login');
    }
  }
  
  return(
    <div className="login-container">
      <img src={logoImg} alt="LogoGLS"/>
      <form onSubmit={handleLogin}>
        
        <h1>GameLifeShare</h1>

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
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        </div>

        <input type="submit" className="logbutton" value="Login"/>

        <div className="bottom-text">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>

      </form>
    </div>
  );
}