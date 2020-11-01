import React, { useState } from 'react'
import './chart.css'
import ChartCard from './ChartCard'
import Modal from './ChartModal'

export default function Chart() {

    const [openPopup, setOpenPopup] = useState(false)

    const data = [
        { name:"Population", value:"population"},
        { name:"Health", value:"health"},
        { name:"Agriculture", value:"agriculture"},
        { name:"Finance", value:"finance"},
        { name:"Market", value:"market"},
    
    ]

    const openInPopup = (e) => {
        setOpenPopup(true)
        e.preventDefault();
    }

    return (
     
        <div className='chart-container' >
        <div className='chart-form' >
            <form onSubmit={openInPopup} >
            <h2>Create a new Chart</h2>
              <ul>
                <li>
                <h3>Select Data Source</h3> 
                  <select name="data" value={data} >
                      {data.map((e,key)=>{
                          return <option key={key} value={e.value} >{e.name}</option>
                      })}
                        
                  </select> 
                  </li>                    
                 
                  <li>
                    <h3>Select Visualization</h3>
                    <button className='button-chart-select'
                    type='submit'
                    >SelectChart</button>
                 </li>
            </ul>
           
            <button className='button-chart-create'
            
            > Create Chart</button>
           
            </form>
     </div>

             <Modal
                title="Select Chart"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
               >

                <ChartCard />
             </Modal>
      </div>

    )
}
