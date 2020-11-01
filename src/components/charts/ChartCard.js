import React from 'react'
import Data from './ChartData'
import './chartcard.css'

function ChartCard() {
    return (
       <div className='card' >
            <div className='cards_container'>
            <div className='cards_wrapper' >
            <ul className='cards_items' >
             <Data
             src='images/bar1.jpg'
             text= "BarChart"
             label="BarChart"
             path='/products'
             />       

            <Data
             src='images/pie2.png'
             text= "PieChart"
             label=" PieChart"
             path='/products'
             />      

             <Data
             src='images/venn3.png'
             text= "VennChart "
             label=" VennChart"
             path='/products'
             />                       
            </ul>

              <ul className='cards_items' >
             <Data
             src='images/area3.png'
             text= "AreaChart"
             label="AreaChart "
             path='/products'
             />       

            <Data
             src='images/line3.jpg'
             text= " LineChart"
             label=" LineChart"
             path='/products'
             />      
            
            </ul>
            
        
            </div>
            </div>
           
       </div>
    )
}

export default ChartCard
