import React from 'react';
import '../footer/Footer.css';
import { Button } from '../../button/Button'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms and conditions</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>  
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/' >LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;