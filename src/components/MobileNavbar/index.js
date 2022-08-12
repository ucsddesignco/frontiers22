import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import hamburger from "../../assets/images/hamburger.svg"
import exit from "../../assets/images/exit.svg"
import desktopLogo from "../../assets/images/desktop-logo.svg";


import './style.scss';

const MobileNavbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
  };

  return (
    <div className='mobile-navbar' id="m-navbar">
        <img 
          src={menuOpen ? exit : hamburger}
          onClick={() => {
            handleMenuClick();
          }} 
          className='menu'
        />
        <img src={desktopLogo} alt="" className='logo' />
        {menuOpen && (
          <div className="background">
            <div className="container">
              <a href="" onClick={() => closeMenu()}>Home</a>
              <a href="#mobile-faq" onClick={() => closeMenu()}>FAQ</a>
              <a href="#mobile-timeline-section" id='mobile-timeline-navigate' onClick={() => closeMenu()}>Timeline</a>
              <a href="https://youtu.be/8JVotsa7EM0" target="_blank">Recap</a>
            </div>
          </div>
        )}
    </div>
  )
}

export default MobileNavbar