import React from 'react'
import Data from './cardData'
import './Products.css'

function Products() {
    return (
       <div className='cards' >
           <h1>Our Products</h1>
            <div className='cards__container'>
            <div className='cards__wrapper' >
            <ul className='cards__items' >
             <Data
             src='images/image2.jpg'
             text= "Demand Forecasting, Predictive Maintenance & Predictive Analytics using Machine Learning"
             label="Business Intelligence"
             path='/products'
             />

            <Data
             src='images/image6.jpeg'
             text= "As more and more artificial intelligence is entering into the world, more and more emotional intelligence must enter into leadership."
             label="Artificial Intelligence"
             path='/products'
             /> 

             <Data
             src='images/image7.jpg'
             text= "Every company has big data in its future and every company will eventually be in the data business"
             label="Data Science"
             path='/products'
             />          

             <Data
             src='images/image1.jpg'
             text= "Data is a precious thing and will last longer than the systems themselves"
             label="Big Data "
             path='/products'
             />                      
             
            </ul>
            
        
            </div>
            </div>
           
       </div>
    )
}

export default Products
