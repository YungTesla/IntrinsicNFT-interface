import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

function Logo2() {
  return (
    <motion.div
      animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
        transitionEnd: {
          display: "none",
        },
      }}
    />
  );
}

export default Logo2;
