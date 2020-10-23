import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, } from 'react-router-dom'



import HomePage from './components/pages/HomePage/HomePage';
import Footer from './components/pages/footer/Footer';
import LoginPage from './components/pages/loginPage/LoginPage';
import Services from './components/pages/Services/Services';
import Products from './components/products/Products';
import SignUpPage from './components/pages/signUpPage/SignUp';



export default  function App() {
  
  return (
    
     <BrowserRouter>
     
      <Navigation/>
        <Route path='/' exact component={HomePage} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Products} />
        <Route path='/login'  component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />
        <Footer/>
        
      </BrowserRouter>
    
  );
  }
