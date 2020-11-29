import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* const password = "F79A7AEA178A69BA0F0847FF61BADEFD4773";
 */
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
const navLi = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: "0",
    transition: { delay: 0.8 },
  },
};
const navLi2 = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: "0",
    transition: { delay: 1.0 },
  },
};
const Navigation = ({ showNav }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showNav && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{ zIndex: "1000" }}
        >
          <motion.div className="nav" variants={modal}>
            <motion.div variants={navLi} initial="hidden" animate="visible">
              Visit Our Website
            </motion.div>
            <motion.div variants={navLi2} initial="hidden" animate="visible">
              Check out our other stuffs
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Navigation;
