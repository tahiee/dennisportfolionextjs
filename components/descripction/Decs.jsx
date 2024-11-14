import { motion, useInView } from "framer-motion";
import Styles from "./styledesc.module.scss";
import { opacity, sildeUp } from "./anime";
import { useRef } from "react";
import Button from "../../common/roundedbutton";

const Decs = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const param =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on cutting adge.";
  return (
    <div ref={container} className={Styles.dec}>
      <div className={Styles.body}>
        <p>
          {param.split(" ").map((word, index) => {
            return (
              <span key={index} className={Styles.mask}>
                <motion.span
                  variants={sildeUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  custom={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={sildeUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
        >
          The combination of my passion for desgine, code & interaction position
          me in a unique place.
        </motion.p>

        <div data-scroll data-scroll-speed={0.1}>
          <Button className={Styles.button}>
            <p style={{color:"white"}}>About Me</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Decs;
