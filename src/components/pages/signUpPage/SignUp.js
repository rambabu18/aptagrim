import React from 'react'
import { Button } from '../../button/Button'
import './sign.css'


export default function SignUpPage() {

    const submitHandler =()=>{
        alert("Button is clicked")
    }
    return (
            <div className='sign-container' >
                
                    <form onSubmit={submitHandler} >
                      <ul className='sign-form-container' >
                      <li>
                          <label htmlFor="text" >Name</label>
                        <input type='text' id='name' placeholder='Enter your Name' name='name' />
                          </li>
                         <li>
                          <label htmlFor="email" >Email</label>
                        <input type='email' id='email' placeholder='Enter your Email' name='email' />
                          </li>
                        <li>
                         <label htmlFor='mobile-number' >Mobile Number</label>
                        <input type='text' placeholder='Enter your mobile number' id='mobile' name='mobile' />
                        </li>
                        <li>
                        <Button 
                         buttonStyle='btn--outline'
                         buttonSize='btn--medium' 
                         type='submit'> SignUp</Button>
                        </li>
                        </ul> 
                    </form>
                

            </div>
        
    )
}
