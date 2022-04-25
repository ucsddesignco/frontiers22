import React from 'react'
import './style.scss';
import Logo from '../../assets/images/footer-logo.png';

const MobileFooter = () => {
  return (
    <div className="footer">
        <div className="container">
            <p>Made with</p>
            <img src={Logo} alt="" />
        </div>
        <a href="malito: hello@ucsddesign.co">hello@ucsddesign.co</a>
    </div>
  )
}

export default MobileFooter