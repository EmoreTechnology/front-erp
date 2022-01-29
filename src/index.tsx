import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/home';
import {mount, route} from 'navi';
import {Router} from 'react-navi';

import AppRoutes from './AppRoutes';
import Logged from './pages/homeLogged/logged';
import Login from './components/ModalPages/Login/login';
import Register from './components/ModalPages/Register/register';

const routes = mount({
  "/": route({
    title: 'Home',
    view: <Home />
  }),
  "/login": route({
    title: 'Login',
    view: <Login />
  }),
  "/register": route({
    title: 'Register',
    view: <Register />
  }),
  "/logged": route({
    title: 'Logged',
    view: <Logged />
  })
})

ReactDOM.render(<Router routes={routes}/>,
  document.getElementById('root')
);