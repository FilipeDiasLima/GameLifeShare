
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import Homepage from './pages/Homepage/index.js';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register"  component={Register}/>
        <Route path="/homepage"  component={Homepage}/>
      </Switch>
    </BrowserRouter>
  );
}