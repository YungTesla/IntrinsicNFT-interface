import { motion } from "framer-motion";
import royalties from "../../../assets/images/royalties.png";

function Royalties() {
  return (
    <div className="container">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "all", once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src={royalties} alt="Lorem" />
        <motion.div
          className="text-wrapper"
          initial={{ opacity: 0, x: "-60vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: "all", once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2 className="green big">ROYALTIES</h2>
          <p>
            Every minted NFT increases in value, therefore it will be
            interesting to sell your NFT. A small amount of 10% of the
            selling-price will be paid as a royalty to increase the total staked
            value. In that way the intrinsic value of your NFT will become
            higher with every trade.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Royalties;
