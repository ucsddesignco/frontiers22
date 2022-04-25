import React from 'react'
import { Grid } from '@material-ui/core';
import hamburger from "../../assets/images/hamburger.png"
import desktopLogo from "../../assets/images/desktop-logo.png";


import './style.scss';

const MobileNavbar = () => {

  return (
    <div className='mobile-navbar'>
        <img src={hamburger} alt="" className='menu' />
        <img src={desktopLogo} alt="" className='logo' />
    </div>
  )
}

export default MobileNavbar