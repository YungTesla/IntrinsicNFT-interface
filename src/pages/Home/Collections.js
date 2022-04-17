import "../../assets/Collections.css";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ethereum from "../../assets/etherlogo2.png";

const variant = {
  init: {
    opacity: 0,
    y: 100,
  },
};

const titleMotion = {
  rest: {
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "var(--brandcolor-blue)",
    scale: 1.0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const numberMotion = {
  rest: {
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.0,
    color: "var(--brandcolor-green)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const buttonVariant = {
  animate: {
    "background-color": "var(--brandcolor-green)",
    color: "var(--c-secondaryfocus)",
    scale: 1.05,
    "box-shadow": "0px 10px 13px -7px var(--brandcolor-blue)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
    },
  },
};

const nfts = [
  "QmSZkDL2ThXSTUGqz1b2rgK8reKkV5z2HnjEHn1WHZDShp",
  "QmQX8ZWTXVV2JQEH4cZzfEDaHvE7nspRDaphpQR9FheptF",
];

function Collections() {
  // const [quantity, setQuantity] = useState(1);
  const { ref, inView } = useInView({ threshold: 0.75 });
  const animation = useAnimation();

  const [displayInfo, setDisplayInfo] = useState(false);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(nfts[count]);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 70, ease: "anticipate" },
      });
    }
    if (count < nfts.length) {
      setImage(nfts[count]);
    } else {
      setCount(0);
    }
  }, [inView, count, animation]);

  return (
    <div ref={ref} class="collection-container" id="collection-container">
      <motion.div
        className="collection-wrapper"
        variants={variant}
        initial="init"
        animate={animation}
      >
        <div className="nft-container" onClick={(event) => setCount(count + 1)}>
          <img
            src={`https://ipfs.io/ipfs/${image}`}
            alt="NFT"
            className="nft"
          />
        </div>
        <div className="descriptionWrapper">
          <div className={`titleWrapper ${displayInfo ? "" : "wider"}`}>
            <div className="collectionTitle">
              <h1>INTRINSIC NFT X SUSHISWAP</h1>
            </div>
            <div>
              <h2 className="green">COLLECTION</h2>
            </div>
            <div className="buttonWrapper">
              <motion.button
                className="buyNFT"
                whileHover="animate"
                variants={buttonVariant}
                whileTap={{ scale: 0.9 }}
              >
                BUY INTRINSIC NFT
              </motion.button>
              {!displayInfo && (
                <motion.button
                  whileHover="animate"
                  variants={buttonVariant}
                  className="buyNFT"
                  onClick={(event) => setDisplayInfo(!displayInfo)}
                  whileTap={{ scale: 0.9 }}
                >
                  INFO
                </motion.button>
              )}
            </div>
          </div>

          {displayInfo && (
            <div
              className="description"
              onClick={(event) => setDisplayInfo(!displayInfo)}
            >
              <p>
                SushiSwap is a populair Decentralized Finance (DeFi)
                application. SushiSwap provides a platform where users can buy
                and sell crypto assets, it uses a collection of liquidity pools
                to achieve this goal. Users first lock up assets into smart
                contracts, and traders then buy and sell cryptocurrencies from
                those pools, swapping out one token for another. As a liquidity
                provider you will also receive trade fee reward.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        class="collection"
        variants={variant}
        initial="init"
        animate={animation}
      >
        <motion.div
          class="collection-item "
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.h2
            className="green"
            variants={titleMotion}
            // whileHover={{ color: "var(--brandcolor-blue)" }}
          >
            NFT'S SOLD
          </motion.h2>
          <motion.h2 variants={numberMotion}>384</motion.h2>
        </motion.div>
        <motion.div
          class="collection-item "
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.h2 className="green" variants={titleMotion}>
            TOTAL VALUE
          </motion.h2>
          <motion.h2 variants={numberMotion}>
            <img src={ethereum} alt="React Logo" style={{ width: "50px" }} />
            &nbsp; 1.72
          </motion.h2>
        </motion.div>
        <motion.div
          class="collection-item "
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.h2 className="green" variants={titleMotion}>
            INTRINSIC VALUE
          </motion.h2>
          <motion.h2 variants={numberMotion}>
            <img src={ethereum} alt="React Logo" style={{ width: "50px" }} />
            &nbsp; 0.12
          </motion.h2>
        </motion.div>
        <motion.div
          class="collection-item "
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.h2 className="green" variants={titleMotion}>
            PAYOUT INTREST{" "}
          </motion.h2>
          <motion.h2 variants={numberMotion}>
            <img src={ethereum} alt="React Logo" style={{ width: "50px" }} />
            &nbsp;0.32
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Collections;
