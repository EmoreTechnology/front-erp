import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";
import authService from './contexts/auth';
import Home from "./pages/Home/home";
import Logged from "./pages/homeLogged/logged";

const AppRoutes = () => {
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = authService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />

				{currentUser ? (
					<Route path="/" element={<Navigate replace to="/home" />} />
				) : (
					<Route path="/home" element={<Home />} />
				)}

				{currentUser && (
					<Route path="/logged" element={<Logged />} />
				)}
			</Routes>
		</Router>
	)
}

export default AppRoutes;