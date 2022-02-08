import React from 'react';
import {
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import RegisterProducts from '../pages/cadastro-produtos/register-products';

// Pages
import Home from "../pages/Home/home";
import Logged from "../pages/homeLogged/logged";
import RoutesPrivate from './RoutesPrivate';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />

			<Route path="/" element={<Navigate replace to="/home" />} />

			<Route path="/logged" element={<RoutesPrivate><Logged /></RoutesPrivate>} />

			<Route path="/register-products" element={<RoutesPrivate><RegisterProducts /></RoutesPrivate>} />
		</Routes>
	)
}

export default AppRoutes;