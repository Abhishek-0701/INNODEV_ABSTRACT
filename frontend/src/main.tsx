import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes";
import Auth0providerWithNavigate from './auth/Auth0providerWithNavigate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0providerWithNavigate>
      <AppRoutes/>
      </Auth0providerWithNavigate>
      
    </Router>
  </React.StrictMode>
);
