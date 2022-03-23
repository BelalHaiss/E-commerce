import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './app.css';
import App from './App';
import Cart from './components/layout/Cart';
import Nav from './components/layout/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Nav>
                <App />
              </Nav>
            }
          />
          <Route
            path='cart'
            element={
              <Nav>
                <Cart />
              </Nav>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
