import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col, Container } from "react-grid-system";
import Spike from "../../assets/images/spike.png"
import Title from "../../assets/images/title.png";
import Flower3 from "../../assets/images/Flower3.svg";
import Flower5 from "../../assets/images/Flower5.svg";
import './style.scss';

const Sidebar = () => {

    // Animation in App.js

  return (
        <div className='sidebar'>
            <div className="background" id="sidebar-background" ></div>
            
            <div className='card' id='sidebar-section'>
                
                <div className="container-title">
                    <h1>Design</h1>
                    <div className='spike'>
                    <h4>2022</h4>
                    </div>
                </div>
                <h1 className='margin'>Frontiers</h1>

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
                </div>
                <div className="container-img-overflow" id="imgs-box">
                    <div className="container-img" id="sidebar-imgs" >
                        <img src={Flower3} alt="" className='flower3' />
                        <img src={Flower5} alt="" className='flower5' />
                    </div>
                </div>
                
            
            </div>
        </div>
  )
}

export default Sidebar