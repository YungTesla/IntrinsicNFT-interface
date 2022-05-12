import "../../assets/css/Hero.css";
import { ReactComponent as Heroimage } from "../../assets/images/Hero.svg";
import { motion } from "framer-motion";

import { Link } from "react-scroll";

const slideVariant = {
  init: {
    opacity: 0,
    x: "-200",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 4, stiffness: 70, ease: "anticipate" },
  },
};

const imgVariant = {
  init: {
    opacity: 0,
    x: "100vh",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 4.5,
      stiffness: 70,
      ease: "anticipate",
    },
  },
};

function Hero() {
  return (
    <div class="hero-container">
      <div
        class="hero-text"
        variants={slideVariant}
        initial="init"
        animate="animate"
      >
        <motion.h2 variants={slideVariant} initial="init" animate="animate">
          THE FIRST NFT WITH AN INTRINSIC-VALUE
        </motion.h2>
        <motion.p variants={slideVariant} initial="init" animate="animate">
          Locked staking made easy, transparent and confirmed on the blockchain.
          The total value of all the sold NFT's are staked and pays out equally
          to all holders every month. Simply by holding an NFT you are owner of
          the staked pool and the additional earnings.
        </motion.p>
        <motion.div
          className="button-wrapper"
          variants={slideVariant}
          initial="init"
          animate="animate"
        >
          <motion.button
            initial={{
              x: "-100vw",
            }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileTap={{ scale: 1 }}
            class="herobutton"
          >
            MORE INFO
          </motion.button>
          <Link to="collection-container" smooth={true}>
            <motion.button
              initial={{
                x: "-100vw",
              }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              whileTap={{ scale: 1 }}
              class="herobutton"
            >
              COLLECTIONS
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="hero-image"
        variants={imgVariant}
        initial="init"
        animate="animate"
      >
        <Heroimage />
      </motion.div>
    </div>
  );
}

export default Hero;
