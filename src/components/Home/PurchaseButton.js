import { useState } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";

import nftContractAbi from "../../assets/contracts/abi.json";
import wethContractAbi from "../../assets/contracts/abiWETH.json";
const nftContractAddress = "0xBE0b03Bfa01cB4Fb4B1ceD456fb0a2b24fcf23A6";
const wethContractAddress = "0x25098C53B2D6A8FE2a4E149C271E89D15B192115";

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

function PurchaseButton() {
  const [state, setState] = useState("buy");

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      setState("approve");
    } catch (err) {
      console.log(err);
    }
  };

  const mintHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let nftContract = new ethers.Contract(
          nftContractAddress,
          nftContractAbi,
          provider
        );
        nftContract = nftContract.connect(signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.buyNewNFT();

        console.log("Mining... please wait");
        setState("wait");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`
        );
        setState("buy");
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const approveHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let wethContract = new ethers.Contract(
          wethContractAddress,
          wethContractAbi,
          provider
        );
        wethContract = wethContract.connect(signer);

        console.log("Approve payment");
        let nftTxn = await wethContract.approve(nftContractAddress, nftPrice());

        console.log("Mining... please wait");
        setState("wait");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`
        );
        setState("mint");
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        return price.toString();
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  switch (state) {
    case "buy":
      return (
        <motion.button
          onClick={() => connectWalletHandler()}
          whileHover="animate"
          variants={buttonVariant}
          whileTap={{ scale: 0.9 }}
        >
          buy intrinsic nft
        </motion.button>
      );
    case "approve":
      return (
        <motion.button
          onClick={() => approveHandler()}
          whileHover="animate"
          variants={buttonVariant}
          whileTap={{ scale: 0.9 }}
        >
          approve intrinsic nft
        </motion.button>
      );
    case "mint":
      return (
        <motion.button
          onClick={() => mintHandler()}
          whileHover="animate"
          variants={buttonVariant}
          whileTap={{ scale: 0.9 }}
        >
          mint intrinsic nft
        </motion.button>
      );
    case "wait":
      return (
        <button>
          <motion.p
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            processing transaction..
          </motion.p>
        </button>
      );
    default:
      return null;
  }
}

export default PurchaseButton;
