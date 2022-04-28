import React from 'react'
import { Grid } from '@material-ui/core';
import Spike from "../../assets/images/spike.png"
import Flower3 from "../../assets/images/Flower3.svg";
import {prompts} from "../../faq";

import './style.scss';

const FAQ2 = () => {

  return (
    <div className='faq-background'>
      <div className='faq2' id="FAQ" >
          <Grid container className='container'>
              <Grid item xs={6} sm={6} md={6} className='items' >
                <h3>Who can participate?</h3>
                <p>
                  Registration is open to current <b>UCSD students</b> only. Anyone of any skill level can join!
                </p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} className='items' >
                <h3>How long is Design Frontiers?</h3>
                <p>
                It’ll be a one day event on <b>Saturday, May 14th @ 10AM-4PM</b>. Lunch will be provided! See the Timeline for a more detailed breakdown of the day.
                </p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} className='items' >
                <h3>When is the deadline to register?</h3>
                <p>
                <b>Saturday, May 7th @ 11:59PM</b>. We will cap the event at 60 participants, so register early!
                </p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} className='items' >
                <h3>How should I prepare for Design Frontiers if I have no design experience?</h3>
                <p>We’ll be hosting a Navigating Design Frontiers workshop on Wednesday, May 11 at 6:30 PM in the Warren College Room.</p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} className='items' >
                <h3>Where is the Design & Innovation Building?</h3>
                <a href="https://goo.gl/maps/JCf1oYcN7xmNRZca9" target="_blank" >DIB</a>
                <p> is located next to the Pepper Canyon Trolley Station, with entrances located across from the Structural Materials and Engineering building or next to the Regents Loop shuttle stop. Design Frontiers will be hosted in <b>Room 202</b> on the second floor.</p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} className='items' >
                <h3>How big can my team be?</h3>
                <p>
                  Teams can be a min of 3 and a max of 4. Teams will not be assigned, so feel free to make your own in advance or on the day of the event. You can also join one on Design Co’s
                </p>
                <p> </p>
                <a href="https://discord.gg/jpzznvhX3x" target="_blank" >Discord channel #frontiers-22.</a>
              </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default FAQ2