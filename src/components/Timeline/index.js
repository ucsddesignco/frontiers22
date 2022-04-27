import React from 'react'

import './style.scss';
import Flower4 from '../../assets/images/Flower4.svg';
import Flower5 from '../../assets/images/Flower5.svg';

const events = [
  {
    time: "10 AM",
    header: "Event Kickoff",
    description: "Design Frontiers will begin with an overview of the event, an introduction to the brief, and a talk given by a special keynote speaker."
  },
  {
    time: "11 AM",
    header: "Sprint Starts",
    description: "Participants will have a little over 3 hours to design the given prompt and prepare to present their design solution."
  },
  {
    time: "2:30 PM",
    header: "Sprint Ends",
    description: "Teams will present their design solution to our judge panel. Winners will be announced in the closing ceremony and participants can stick around for a networking session. The winning team will receive prizes!"
  },
  {
    time: "3:30 PM",
    header: "Closing Ceremony",
    description: "3 Winners Are Announced, Prize Distribution, Networking Session"
  },
  {
    time: "4 PM",
    header: "Event Ends"
  }
]

const Timeline = () => {
  return (
    <div className="timelineBackground"  >
      <div className="timeline">
        <h2 className="timeline-h2">Timeline</h2>
        <h2>Saturday, May 14</h2>
        <ul className="timeline__table">
          {
            events.map((event) => (
              <li className="timeline__row">
                <div className="timeline__row__time">
                  <span>{event.time}</span>
                </div>
                <div className="timeline__row__detail">
                  <div className="timeline__row__detail__header">
                    <h3>{event.header}</h3>
                  </div>
                  {
                    event.description && 
                    <div className="timeline__row__detail__info">
                      <p>{event.description}</p>
                    </div>
                  }
                </div>
              </li>
            ))
          }
          
        </ul>
          <img src={Flower4} alt="" className='flower4' />
      </div>
    </div>
    
  )
}

export default Timeline