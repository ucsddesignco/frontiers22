import React from 'react'
import { Grid } from '@material-ui/core';
import Spike from "../../assets/images/spike.png"
import Flower from "../../assets/images/Flower.png";


import './style.scss';

const FAQ = () => {
  return (
    <div className='FAQ' id="FAQ">
      {/*
      <div id="nameContainer">
        <h1 className="heroTitle">DESIGN</h1>
        <div className="heroTitle" id="spike">
          <h3 className="heroTitle">2022</h3>
          <img src={Spike} className="orangeSpike" />
        </div>
        <h1>FRONTIERS</h1>
      </div>
      */}

      <div id="headerSpacing"></div>

      <div className="FAQ-Cont">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} className="faqgrid">
            <div className="cont">
              <h2>Who can participate?</h2>
              <p>Registration is open to current UCSD students only. Anyone of any skill level can join!</p>
            </div>
          </Grid> 
          <Grid item xs={12} sm={6} className="faqgrid">
            <div className="cont">
              <h2>When is the deadline to register? </h2>
              <p>Saturday, May 7th @ 11:59PM. We will cap the event at 60 participants, so register early!</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="faqgrid">
            <div className="cont">
              <h2>How big can my team be?</h2>
              <p>Teams can be a min of 3 and a max of 4. Teams will not be assigned, so feel free to make your own in advance or on the day of the event. You can also join one on Design Co’s Discord channel.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="faqgrid">
            <div className="cont">
              <h2>Where is the Design & Innovation Building?</h2>
              <p>Insert link to map & say 202 is on the second floor</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="faqgrid">
            <div className="cont">
              <h2>How long is Design Frontiers?</h2>
              <p>It’ll be a one day event on Saturday, May 14th @ 10AM-4PM. Lunch will be provided, and the first 20 people who show up will receive a free Design Frontiers shirt! See the Timeline for a more detailed breakdown of the day.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}className="flowergrid">
            <img src={Flower} className="flower" />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default FAQ