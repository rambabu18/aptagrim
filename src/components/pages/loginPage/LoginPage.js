import React from 'react'
import { Button } from '../../button/Button'
import './login.css'

export default function LoginPage() {

    const handleClick =()=>{
        alert("Button is clicked")
    }
    return (
        
            <div className='login-container' >
                <div className='login-page' >
                    <form>
                        <label>Email</label>
                        <input type='text' placeholder='email' name='email' />
                        <label>Mobile</label>
                        <input type='text' placeholder='mobile' name='mobile' />
                        <Button type='submit' onClick={handleClick} >Submit</Button>
                    </form>
                </div>

            </div>
        
    )
}
