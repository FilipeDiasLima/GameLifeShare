import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo300.png';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';


export default function Login(){
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleLogin(e){
    console.log(loading);
    console.log('aqui ta ok');
    e.preventDefault();
    dispatch(signInRequest(username, password));
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

        <button type="submit" className="logbutton">
          { loading ? 'Loading...' : 'Login' }
        </button>

        <div className="bottom-text">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>

      </form>
    </div>
  );
}