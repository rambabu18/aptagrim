import React from 'react'
import Otp from '../otp /Otp'
import './modal.css'

 function Modal({onSubmit,closeHandle}) {

    
    
    return (
            <form onSubmit={onSubmit} >
           <div className='modal-wrapper' >
            <div className='modal-header' >
                <p>Enter Your Email and generate OTP</p>
                <span onClick={closeHandle} className='modal-close-btn' > x</span>
            </div>
            <div className='modal-content-email'  >
                <label htmlFor='email'>Email</label>
                <input 
                type='email' 
                id='emai'
                name='email' 
                placeholder= 'Enter your Email' />
              </div>

              <div className='modal-btn'>
                    <button className='btn--clear' >Cancle</button>
                    <button className='btn--verify' >Submit</button>
                    </div>

            <div className='modal-content' >
                <div className='modal-body' >
                    <p>Enter OTP Here</p>
                    <Otp/>
                    <div className='modal-button'>
                    <button className='btnn--clear'  >Clear</button>
                    <button className='btnn--verify' >Verify</button>
                    </div>
                    
                </div>
               
            </div>
        </div>
        </form>
       
    )
}

export default Modal
