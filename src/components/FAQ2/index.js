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
              {
                  prompts.map((prompt) => (
                      <Grid item xs={4} sm={4} md={6} className='items' >
                          <h3>{prompt.question}</h3>
                          <p>
                              {prompt.answer}
                          </p>
                      </Grid>
                  ))
              }
              <Grid item xs={4} sm={4} md={6} className='items' >
                <h3>Where is the Design & Innovation Building?</h3>
                <p>Here's the location on </p>
                <a href="https://goo.gl/maps/JCf1oYcN7xmNRZca9" target="_blank" >Google Maps</a>
                <p>. Room 202 is on the 2nd floor.</p>
              </Grid>
              <Grid item xs={4} sm={4} md={6} className='items' >
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