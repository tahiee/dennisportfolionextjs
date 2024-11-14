import { delay } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duraction: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};
export const sildeUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duraction: 0.5, delay: 0.02 * i },
  }),
  closed: {
    y: "100%",
  },
};
