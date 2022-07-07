import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';

import Settings from './Pages/Settings';
import './App.css';
import './customcss/humburger.css';
import Sign_Up from './Pages/Sign_Up';
import Marketing from './Pages/Marketing';
import { AuthProvider } from './Context/AuthContext';
import { PrivateRoutes } from './Pages/PrivateRoutes';

import { BlockedRoutes } from './Pages/PublicRoutes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BlockedRoutes>
                <Marketing />
              </BlockedRoutes>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Sign_Up />} />
          <Route path="Settings" element={<Settings />} />
          <Route
            path="home"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
