import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../button/Button'
import Modal from '../../modal/Modal';
import './login.css'


export default function LoginPage({buttonRef, showModal}) {

  const{show, setShow} = useState(false);
    
    return (
            <div className='login-container' >
                
                    <form>
                      <ul className='form-container' >
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
                          > Login</Button>
                        </li>
                        <li>
                        <Link onClick={()=>setShow(true)} 
                         className='button secondary text-center' >SignUp</Link>
                        </li>
                        </ul> 
                    </form>
             {
               show ? (<Modal show={show} />) : null
             }
                    

            </div> 
    )
}



