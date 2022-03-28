import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, DataProvider, GeneralProvider, ThemeProvider, CartProvider, WishlistProvider } from './Context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>  
        <AuthProvider>
          <GeneralProvider>
            <DataProvider>
              <CartProvider>
                <WishlistProvider>
                  <App />
                </WishlistProvider> 
              </CartProvider>
            </DataProvider> 
          </GeneralProvider> 
        </AuthProvider>
      </ThemeProvider>   
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
