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

  const [user , setUser] = useState(null);

  const login = (email, password) => {
    console.log("login", { email, password});
    setUser({ id: "123", email });
  };

  const logout = () => {
    console.log("logout");
  };


  return (

    <Router>
      <AuthContext.Provider value={{authenticated:
        !!user, user, login}}>
        <Routes>
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Logged" element={<Logged/>} />
        </Routes>
      </AuthContext.Provider>
    </Router>

  )
}

export default AppRoutes;