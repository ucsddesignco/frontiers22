import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import Flower from "../../assets/images/Flower.png";
import Spike from "../../assets/images/spike.png"
import './style.scss';

const Landing = () => {
  return (
    <div className="landing">
      <Row>
        <Col md={7}>
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
        </Col>
        <Col md={5}>
          <Row>
            <p>
              Design Frontiers is Design Co’s annual design sprint where 
              teams of creative, collaborative individuals tackle real 
              problems in the world and design for innovation.
            </p>
          </Row>
          <Row>
            <Col md={4}>
              <img className="flower" src={Flower} />
            </Col>
            <Col md={4}>
              <img className="flower" src={Flower} />
            </Col>
            <Col md={4}>
              <img className="flower" src={Flower} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Landing