import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/home';
import AppRoutes from './AppRoutes';
import Logged from './pages/homeLogged/logged';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);