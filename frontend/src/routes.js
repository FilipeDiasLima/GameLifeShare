
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import Homepage from './pages/Homepage/index.js';
import Profile from './pages/Profile/index';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register"  component={Register}/>
        <Route path="/home"  component={Homepage}/>
        <Route path="/profile"  component={Profile}/>
      </Switch>
    </BrowserRouter>
  );
}