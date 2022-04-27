import React from 'react'
import './style.scss';
import Logo from "../../assets/images/desktop-logo.svg"

const Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a id="home-navigate" >HOME</a>
                    </li>
                    <li>
                        <a id="faq-navigate" >FAQ</a>
                    </li>
                    <li>
                        <a id="timeline-navigate" >TIMELINE</a>
                    </li>
                    <li>
                        <a href="https://bit.ly/dco-df22-signup" target="_blank" >REGISTER</a>
                    </li>
                    <li>
                        <a href="https://ucsddesign.co" target="_blank"><img src={Logo} /></a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar;
