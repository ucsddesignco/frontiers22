import React from 'react'
import Spike from "../../assets/images/spike.png"
import { Row, Col, Container } from "react-grid-system";

import './style.scss';

const Title = () => {
  return (
    <div className="title module" id="section">
        <div>
            <h1 className="hero-title">DESIGN</h1>
            <div className="hero-title" id="spike">
                <h3 className="hero-title">2022</h3>
                <img src={Spike} className="orange-spike" />
            </div>
            <h1>FRONTIERS</h1>
        </div>
        <h2>
            Sat, May 14th @ 10AM-4PM <br></br>
            Design & Innovation Building Room 202
        </h2>
    </div>

  )
}

export default Title