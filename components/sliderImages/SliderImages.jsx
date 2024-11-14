import Image from "next/image";
import Styles from "./styleSliderImages.module.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SliderImages = () => {
  const slider1 = [
    {
      color: "#e3e5e7",
      src: "c2.jpg",
    },
    {
      color: "#d6d7dc",
      src: "decimal.jpg",
    },
    {
      color: "#e3e3e3",
      src: "funny.jpg",
    },
    {
      color: "#21242b",
      src: "google.jpg",
    },
  ];

  const slider2 = [
    {
      color: "#d4e3ec",
      src: "maven.jpg",
    },
    {
      color: "#e5e0e1",
      src: "panda.jpg",
    },
    {
      color: "#d7d4cf",
      src: "powell.jpg",
    },
    {
      color: "#e1dad6",
      src: "wix.jpg",
    },
  ];
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const height = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return (
    
    <div ref={container} className={Styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={Styles.slider}>
        {slider1.map((pro, index) => {
          return (
            <div

              className={Styles.project}
              key={`sli_${index}`}
              style={{ backgroundColor: pro.color}}
            >
              <div className={Styles.imageContainer}>
                <Image
                  alt="ProjectImages"
                  fill={true}
                  src={`/images/${pro.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={Styles.slider}>
        {slider2.map((pro, index) => {
          return (
            <div
              className={Styles.project}
              key={`sli_${index}`}
              style={{ backgroundColor: pro.color }}
            >
              <div className={Styles.imageContainer}>
                <Image
                  alt="ProjectImages"
                  fill={true}
                  src={`/images/${pro.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      <motion.div style={{height}} className={Styles.circleContainer}>
        <div className={Styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default SliderImages;
