"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./styleheader.module.scss";
import Navbar from "../navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Megnatic from "../../common/magnetic";
import Buttonx from "../../common/roundedbutton";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const targertBurger = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(targertBurger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(targertBurger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(targertBurger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  const [isMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <div className={style.header}>
        <Megnatic>
          <div className={style.logo}>
            <p className={style.copyright}>©</p>
            <div className={style.name}>
              <p className={style.codeby}>Code by</p>
              <p className={style.dennis}>Dennis</p>
              <p className={style.snellenberg}>Snellenberg</p>
            </div>
          </div>
        </Megnatic>

        <div className={style.navContainer}>
          <Megnatic>
            <div className={`${style.menuName}`} onClick={toggleMenu}>
              <p>Menu</p>
              <div className={style.MenuEndicator}></div>
            </div>
          </Megnatic>

          <AnimatePresence mode="exit">
            {isMenu && <Navbar toggleMenu={toggleMenu} />}
          </AnimatePresence>
          
          <div className={`${style.nav} ${isMenu ? style.shownav : ""}`}>
            <Megnatic>
              <div className={style.el}>
                <p>Work</p>
                <div className={style.endicator}></div>
              </div>
            </Megnatic>
            <Megnatic>
              <div className={style.el}>
                <p>About</p>
                <div className={style.endicator}></div>
              </div>
            </Megnatic>
            <Megnatic>
              <div className={style.el}>
                <p>Contact</p>
                <div className={style.endicator}></div>
              </div>
            </Megnatic>
          </div>
        </div>

        <div ref={targertBurger} className={style.headerButtonContainer}>
          <Buttonx
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={style.button}
          >
            <div
              className={`${style.burger} ${
                isActive ? style.burgerActive : ""
              }`}
            ></div>
          </Buttonx>
        </div>

        <AnimatePresence mode="exit">{isActive && <Navbar />}</AnimatePresence>
      </div>
    </>
  );
};

export default Header;
