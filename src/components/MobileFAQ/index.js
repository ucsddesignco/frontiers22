import React from 'react'
import { Grid } from '@material-ui/core';
import Spike from "../../assets/images/spike.png"
import Flower from "../../assets/images/Flower.png";


import './style.scss';

const MobileFAQ = () => {

    const prompts = [
        {
          question: "Who can participate?",
          answer: "Registration is open to current UCSD students only. Anyone of any skill level can join!",
          },
        {
          question: "How big can my team be?",
          answer: "Teams can be a min of 3 and a max of 4. Teams will not be assigned, so feel free to make your own in advance or on the day of the event. You can also join one on Design Co’s Discord channel.",
          },
        {
          question: "How long is Design Frontiers?",
          answer: "It’ll be a one day event on Saturday, May 14th @ 10AM-4PM. Lunch will be provided, and the first 20 people who show up will receive a free Design Frontiers shirt! See the Timeline for a more detailed breakdown of the day.",
          },
        {
          question: "When is the deadline to register?",
          answer: "Saturday, May 7th @ 11:59PM. We will cap the event at 60 participants, so register early!",
          },
        {
          question: "Where is the Design & Innovation Building?",
          answer: "Insert link to map & say 202 is on the second floor"
        }
      ]

  return (
    <div className='mobile-faq'>
        <div className="container-flower">
            <img src={Flower} alt="" className='flower-mini' />
            <img src={Flower} alt="" className='flower-big' />
        </div>
        
        <h2>FAQ</h2>
        {
            prompts.map((prompt) => (
                <div>
                    <h3>{prompt.question}</h3>
                    <p>
                        {prompt.answer}
                    </p>
                </div>
            ))
        }
        
    </div>
  )
}

export default MobileFAQ