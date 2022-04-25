import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import Flower from "../../assets/images/Flower.png";
import './style.scss';

const Landing = () => {
  return (
    <div className="landing" id="landing-section">
      <div>
        <p>
          Design Frontiers is Design Co’s annual design sprint where 
          teams of creative, collaborative individuals tackle real 
          problems in the world and design for innovation.
        </p>
      </div>
      <div>
        <img className="flower" src={Flower} />
        <img className="flower" src={Flower} />
        <img className="flower" src={Flower} />
      </div>
    </div>
  )
}

export default Landing