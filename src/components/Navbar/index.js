import React from 'react'
import './style.scss';
import Logo from "../../assets/images/desktop-logo.png"

const Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a href="/" >HOME</a>
                    </li>
                    <li>
                        <a href="/faq" >FAQ</a>
                    </li>
                    <li>
                        <a href="/timeline" >TIMELINE</a>
                    </li>
                    <li>
                        <a href="/register" >REGISTER</a>
                    </li>
                </ul>
            </nav>
            <img src={Logo} />
        </div>
    )
}

export default Navbar;
