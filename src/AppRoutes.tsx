import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";

// Pages
import RegisterProducts from './pages/cadastro-produtos/register-products';
import Home from "./pages/Home/home";
import Logged from "./pages/homeLogged/logged";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/logged" element={<Logged />} />
				<Route path="/register-products" element={<RegisterProducts />} />
			</Routes>
		</Router>
	)
}

export default AppRoutes;