"use client";
import Image from "next/image";
import Style from "./heroStyle.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const firstText = useRef(null);
  const seconfText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animtion);

    // scrolling adjusment for the slider
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-300px",
    });
  }, []);

  const animtion = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(seconfText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animtion);
  };

  return (
    <main className={Style.mainHero}>
      <Image src={"/images/DSC07033.jpg"} fill={true} alt="heroBackground" />
      <div className={Style.slideContainer}>
        <div ref={slider} className={Style.slider}>
          <p ref={firstText}>Dennis Snellenberg -</p>
          <p ref={seconfText}>Dennis Snellenberg -</p>
        </div>
      </div>

      <div data-scroll data-scroll-speed={0.1} className={`${Style.description}`}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </main>
  );
};

export default Hero;
