import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MenuItems,MenuItems1} from '../utils/MenuItems'
import Dropdown from './Dropdown';
import { logo } from "../utils/photos"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSpeechSynthesis } from 'react-speech-kit'

const Navbar=()=>{
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const { speak } = useSpeechSynthesis();
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      <img id="logo" src={logo} alt="LOGO"/>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          IIITDM BANK
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown Items={MenuItems}/>}
            
           
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
            
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown Items={MenuItems1}/>}
            
           
          </li>
        
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
        <ButtonGroup variant="text" aria-label="text button group" sx={{position:'absolute',top:{xs:'10px',md:'30px'} ,right:{xs:'10px',md:'20px'}}}>
        <Link to='/register' id='link'>
        <Button id='btn1'>Open Account</Button>
        </Link>
       <Link to='/login' id='link'>
       <Button id='btn1'>log In</Button>
       </Link>
        
       
      </ButtonGroup>
        
      </nav>
    </>
  );
}

export default Navbar;
