import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import Flower from "../../assets/images/Flower.png";
import Title from "../../assets/images/title.png";
import './style.scss';

const MobileLanding = () => {
  return (
    <div className="mobile-landing">
      <img src={Title} alt="" className='title' />
      <p>
        Sat, May 14th @ 10AM-4PM <br></br>
        Design & Innovation Building Room 202
      </p>
      <div className="center">
        <h2>Register</h2>
      </div>
    </div>
  )
}

export default MobileLanding