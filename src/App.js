import React, { useEffect, useState, useRef } from 'react';
import './styles/main.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import FAQ from './components/FAQ';
import FAQ2 from './components/FAQ2';
import Timeline from './components/Timeline';

import MobileNavbar from './components/MobileNavbar';
import MobileLanding from './components/MobileLanding';
import MobileFAQ from './components/MobileFAQ';
import MobileFooter from './components/MobileFooter';

function App() {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const [width, setWidth] = useState()

  useEffect(() => {

      // Horizontal scrolling
      const container = document.getElementById("container");
      const tl1 = gsap.timeline();
      
      tl1.to(container, {
          x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => "+=" + container.clientWidth,
          }
        }) 


        // Title scaling in Sidebar
        const sec = document.getElementById("sidebar-section"); // inside Sidebar component
        const tl2 = gsap.timeline();

        tl2.to(sec, {
            y: 40,
            scale: 0.6,
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

        // Subheader Transition  in Sidebar
        const box = document.getElementById("sidebar-box"); // inside Sidebar component
        const subhead = document.getElementById("sidebar-subhead"); // inside Sidebar component
        const sidebarBackground = document.getElementById("sidebar-section").offsetWidth; // inside Sidebar component
        const section2 = document.getElementById("landing-section").offsetWidth; // inside Landing component
        const section3 = document.getElementById("FAQ").offsetWidth; // inside FAQ component
        const total = section2 + section3;
        const tl3 = gsap.timeline();

        tl3
          .to(subhead, {
              y: '-6.5vw',
              ease: "none",
              scrollTrigger: {
                  trigger: box,
                  invalidateOnRefresh: true,
                  scrub: 1,
                  start: `${section2 -250}px`,
              }
          })
          .to(subhead, {
            y: '-13vw',
            ease: "none",
            scrollTrigger: {
                trigger: box,
                invalidateOnRefresh: true,
                scrub: 1,
                start: `${total + sidebarBackground}px`,
            }
        })

        //navigation sections
        const homeNav = document.getElementById("home-navigate");
        const faqNav = document.getElementById("faq-navigate");
        const timelineNav = document.getElementById("timeline-navigate");

        homeNav.addEventListener('click', function() {
          gsap.to(window, {
            ease: 'none',
            scrollTo: {
              y: 0,
            },
            duration: 0.05,
          })
        })
        faqNav.addEventListener('click', function() {
          gsap.to(window, {
            ease: 'none',
            scrollTo: {
              y: (section2 + sidebarBackground/3 ),
            },
            duration: 0.05,
          })
        })
        timelineNav.addEventListener('click', function() {
          gsap.to(window, {
            ease: 'none',
            scrollTo: {
              y: (total + sidebarBackground + sidebarBackground/2 ),
            },
            duration: 0.05,
          })
        })

        

  })

return (
  <div>
  <div className="desktop-container">
    <Sidebar />
    <Navbar />
    <div id="container">
      <Landing />
      <FAQ2 />
      <Timeline />
    </div>
    
  </div>
  <div className="mobile-container">
    <MobileNavbar />
    <MobileLanding />
    <MobileFAQ />
    <Timeline />
    <MobileFooter />
  </div>

</div>
);
}

export default App;
