import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


import Home from "./pages/Home/home";
import Logged from "./pages/homeLogged/logged";

import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {

  const [user, setUser] = useState<any>(null);
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const login = ({ email, password }: any) => {
    console.log("login", { email, password });
    setUser({ id: '1', email });
  };

  const loggedIn = false;

  const logout = () => {
    console.log("logout");
  };


  return (

    <Router>
      <AuthContext.Provider value={{
        authenticated:
          !!user, user, login
      }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Logged" element={<Logged />} />
        </Routes>
      </AuthContext.Provider>
    </Router>

  )
}

export default AppRoutes;