import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../button/Button'
import Modal from '../../modal/Modal';
import './login.css'


export default function LoginPage(props) {

  const[show, setShow] = useState(false)

      const closeModal =() => setShow(false)


      const handleLoginSubmit =()=>{
        props.history.push('/dashboard')
      }
    
    return (
            <div className='login-container' >
                
                    <form onSubmit={handleLoginSubmit} >
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
                        <Link  className='button secondary text-center'
                           onClick={()=>setShow(true)} 
                            >
                            SignUp 
                         </Link>  
                      </li>
                        </ul> 
                    </form>
                    { show ?
                    <Modal show={show} closeModal={closeModal}  /> : null
                    }
            </div> 
    )
}



