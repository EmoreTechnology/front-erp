import React from 'react';
import {
	Route,
	Routes,
} from "react-router-dom";

// Pages
import Home from "../pages/Home/home";
import Logged from "../pages/homeLogged/logged";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />

			<Route path="/logged" element={<Logged />} caseSensitive={true} />
		</Routes>
	)
}

export default AppRoutes;