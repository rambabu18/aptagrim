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
import DashBoard from './components/pages/dashboard/DashBoard';
import Chart from './components/charts/Chart';
import BarChart from './components/charts/BarChart'



export default  function App() {
  
  return (
    
     <BrowserRouter>
     
      <Navigation/>
        <Route path='/' exact component={HomePage} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Products} />
        <Route path='/login'  component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/chart' component={Chart} />
        <Route path='/barchart' component={BarChart} />
        <Footer/>
        
      </BrowserRouter>
    
  );
  }
