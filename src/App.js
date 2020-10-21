import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, } from 'react-router-dom'
// import NavBar from './components/navBar';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import HomePage from './components/pages/HomePage/HomePage';
import Footer from './components/pages/footer/Footer';
import LoginPage from './components/pages/loginPage/LoginPage';

function App() {
  return (
    
     <BrowserRouter>
      <Navigation/>
      {/* <NavBar/> */}
     
        <Route path='/' exact component={HomePage} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/login'  component={LoginPage} />
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
