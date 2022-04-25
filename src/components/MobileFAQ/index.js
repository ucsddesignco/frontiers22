import React from 'react'
import { Grid } from '@material-ui/core';
import Spike from "../../assets/images/spike.png"
import Flower from "../../assets/images/Flower.png";
import { prompts } from '../../faq';


import './style.scss';

const MobileFAQ = () => {

  return (
    <div className='mobile-faq'>
        
        <h2>FAQ</h2>
        {
            prompts.map((prompt) => (
                <div className='block'>
                    <h3>{prompt.question}</h3>
                    <p>
                        {prompt.answer}
                    </p>
                </div>
            ))
        }
        <div className='block'>
          <h3>Where is the Design & Innovation Building?</h3>
          <p>Here's the location on </p>
          <a href="https://goo.gl/maps/JCf1oYcN7xmNRZca9" target="_blank" >Google Maps</a>
          <p>. Room 202 is on the 2nd floor.</p>
        </div>
        <div className='block'>
          <h3>How big can my team be?</h3>
          <p>
            Teams can be a min of 3 and a max of 4. Teams will not be assigned, so feel free to make your own in advance or on the day of the event. You can also join one on Design Co’s 
          </p>
          <p> </p>
          <a href="https://discord.gg/jpzznvhX3x" target="_blank" >Discord channel #frontiers-22.</a>
        </div>
    </div>
  )
}

export default MobileFAQ