import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/home';
import {mount, route} from 'navi';
import {Router} from 'react-navi';
import { createServer } from 'miragejs';

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

createServer({
	routes() {
		this.namespace = 'api';
		this.get('login', () => {
			return [
				{
					id: 1,
					email: 'admin',
					password: '123',
				}
			]
		})
	}
})

ReactDOM.render(
	<Router routes={routes} />,
	document.getElementById('root')
);