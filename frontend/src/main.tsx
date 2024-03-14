import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes";
import Auth0providerWithNavigate from './auth/Auth0providerWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});






ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0providerWithNavigate>
      <AppRoutes/>
      </Auth0providerWithNavigate>
      </QueryClientProvider>
      
    </Router>
  </React.StrictMode>
);
