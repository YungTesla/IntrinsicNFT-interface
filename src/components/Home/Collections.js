import "../../assets/css/Collections.css";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ethereum from "../../assets/images/ethereum.png";
import PurchaseButton from "../Home/PurchaseButton";

import { ethers } from "ethers";
import nftContractAbi from "../../assets/contracts/abi.json";
const nftContractAddress = "0xBE0b03Bfa01cB4Fb4B1ceD456fb0a2b24fcf23A6";

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

  const [priceNFT, setPriceNFT] = useState(null);

  useEffect(() => {
    nftPrice();
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

  const nftPrice = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const nftContract = new ethers.Contract(
          nftContractAddress,
          nftContractAbi,
          provider
        );
        const price = await nftContract.newPriceNFT();
        setPriceNFT(price.toString() / 10 ** 18);
        return price.toString();
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div ref={ref} className="collection" id="collection-container">
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
              <PurchaseButton />

              {!displayInfo && (
                <motion.button
                  whileHover="animate"
                  variants={buttonVariant}
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
        class="kpi"
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
          <motion.h2 className="green" variants={titleMotion}>
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
            INTRINSIC PRICE
          </motion.h2>
          <motion.h2 variants={numberMotion}>
            <img src={ethereum} alt="React Logo" style={{ width: "50px" }} />
            &nbsp; {priceNFT}
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
