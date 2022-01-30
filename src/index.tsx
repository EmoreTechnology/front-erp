// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import { createServer } from 'miragejs';

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
	<React.StrictMode>
		<AppRoutes />
	</React.StrictMode>,
	document.getElementById('root')
);