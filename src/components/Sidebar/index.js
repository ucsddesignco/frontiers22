import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col, Container } from "react-grid-system";
import Spike from "../../assets/images/spike.png"
import Title from "../../assets/images/title.png";
import './style.scss';

const Sidebar = () => {

    // Animation in App.js

  return (
        <div className='sidebar'>

            <div className="background" id="sidebar-background" ></div>
            
            <div className='card' id='sidebar-section'>
                
                <img src={Title} alt="" className='title' />

                <div className="subhead-box" id="sidebar-box" >
                    <div className="subhead-container" id="sidebar-subhead" >
                        <h3>
                            Sat, May 14th @ 10AM-4PM <br></br>
                            Design & Innovation Building Room 202
                        </h3>
                        <h2>
                            FAQ
                        </h2>
                        <h2>
                            Timeline
                        </h2>
                    </div>
                    <div className="subhead-container" id="subhead3">
                        
                    </div>
                </div>
                
            
            </div>
        </div>
  )
}

export default Sidebar