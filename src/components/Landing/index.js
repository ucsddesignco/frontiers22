import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import Flower5 from "../../assets/images/Flower5.svg";
import Flower2 from "../../assets/images/Flower2.svg";
import Flower4 from "../../assets/images/Flower4.svg";
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
        <img className="flower5" src={Flower5} />
        <img className="flower" src={Flower2} />
        <img className="flower" src={Flower4} />
      </div>
    </div>
  )
}

export default Landing