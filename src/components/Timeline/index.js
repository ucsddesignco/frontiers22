import React from 'react'

import './style.scss';

const events = [
  {
    time: "10 AM",
    header: "Event Kickoff",
    description: "Registration & Icebreakers, Opening Remarks, Brief Introduction, Keynote Speaker"
  },
  {
    time: "11 AM",
    header: "Sprint Starts",
    description: "Design Sprint, Lunch"
  },
  {
    time: "2:30 PM",
    header: "Sprint Ends",
    description: "Presentations Begin, Judging Begins "
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
    <div className="timeline">
      <h2 className="timeline__header">Timeline</h2>
      <h2>Thursday, May 15</h2>
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
    </div>
  )
}

export default Timeline