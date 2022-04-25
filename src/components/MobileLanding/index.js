import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import Flower from "../../assets/images/Flower.png";
import Flower1 from "../../assets/images/Flower1.svg";
import Title from "../../assets/images/title.png";
import Spike from "../../assets/images/blackspike.svg";
import Arrow from "../../assets/images/arrow.svg";
import './style.scss';

const MobileLanding = () => {
  return (
    <div className="mobile-landing">
      <div className="container-title">
        <h1>Design</h1>
        <div className='spike'>
          <h4>2022</h4>
        </div>
      </div>
      <h1 className='margin'>Frontiers</h1>
      <p>
        Sat, May 14th @ 10AM-4PM <br></br>
        Design & Innovation Building Room 202
      </p>
      <div className="container-bottom">
        <div className="container-register">
          <h2>Register</h2>
          <img src={Arrow} alt="" />
        </div>
        <img src={Flower1} alt="" className='right' />
      </div>
      
      
    </div>
  )
}

export default MobileLanding