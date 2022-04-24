import React, { useEffect } from 'react';
import './styles/main.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Navbar from "./components/Navbar";
import Title from './components/Title';
import Landing from './components/Landing';
import FAQ from './components/FAQ';
import Timeline from './components/Timeline';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const container = document.getElementById("container");
    const sec = document.getElementById("section");
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();

    tl1.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
      }
    })

    tl2.to(sec, {
        scaleX: 0.5,
        scaleY: 0.5,
        transformOrigin: 'left top',
        ease: "none",
        scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            scrub: 1,
            start: 0,
            end: '+=500'
        }
    })
  })

  return (
    <div>
      <div className="desktop-container">
        <div className="module fixed" id="section" >
          <Title />
        </div>
        <div className="title-frame">
          
        </div>
        <div id="container">
          <Landing />
          <FAQ />
          <Timeline />
        </div>
        <Navbar />
      </div>
      <div className="mobile-container">
        <Timeline />
      </div>

    </div>
  );
}

export default App;
