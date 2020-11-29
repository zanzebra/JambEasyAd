import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = ({ showNav }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
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
          <div>
            <div class="rocket">
              <div class="rocket-body">
                <div class="body"></div>
                <div class="fin fin-left"></div>
                <div class="fin fin-right"></div>
                <div class="window"></div>
              </div>
              <div class="exhaust-flame"></div>
              <ul class="exhaust-fumes">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul class="star">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            <h2
              style={{
                width: "100%",
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "Bluereceipt sans",
              }}
            >
              Yay you clicked it !
            </h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Navigation;
