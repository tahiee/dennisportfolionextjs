import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const index = ({ children }) => {
  const megnatic = useRef(null);

  useEffect(() => {
    console.log(children);
    const xto = gsap.quickTo(megnatic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yto = gsap.quickTo(megnatic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    megnatic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, top, left } =
        megnatic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xto(x * 0.35);
      yto(x * 0.35);
    });
    megnatic.current.addEventListener("mouseleave", () => {
      xto(0);
      yto(0);
    });
  }, []);
  return React.cloneElement(children, { ref: megnatic });
};

export default index;
