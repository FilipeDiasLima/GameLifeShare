import React from 'react';

import './global.css';

import Routes from './routes.js';
import { Provider} from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
