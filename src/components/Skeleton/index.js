import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.scss';

function Skeleton() {

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
        <div className="module green" id="section" ></div>
        <div id="container">
            
            <div className="module yellow"></div>
            <div className="module purple"></div>
            <div className="module orange"></div>
            <div className="module blue"></div>
            <div className="module red"></div>
        </div>
    </div>
  );
}

export default Skeleton;