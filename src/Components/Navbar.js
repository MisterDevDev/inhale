import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const NavBar = () => {
  const path = useLocation();

  return (
    <div className={path.pathname === '/home' ? 'fp-navbar' : 'navbar'}>
      <div className='navbar-logo'>
        <Link to='/home' className='navbar-home'>
          <h3 id='fp-underline'>E-Triton</h3>
        </Link>
      </div>
      <div className='navbar-wrapper'>
        <div className='navbar-item'> 
          <Link to='/students' className='navbar-link'>
            <h4 id='fp-underline'>HOME</h4>
          </Link>   
        </div>
        <div className='navbar-item'>
          <Link to='/campuses' className='navbar-link'>
            <h4 id='fp-underline'>PRODUCT</h4>
          </Link>
        </div>
        <div className='navbar-item'>
          <Button 
            variant='contained' 
            startIcon={<EmailIcon />} 
            size='small'
            onClick={() => window.location.href = `mailto:acmecorp@gmail.com`}
          >
            Contact</Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar