import { motion } from "framer-motion";
import rewards from "../../assets/rewards.png";

function Rewards() {
  return (
    <div className="container rewards">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "all", once: true }}
        transition={{
          duration: 0.2,
        }}
      >
        <motion.div
          className="text-wrapper"
          initial={{ opacity: 0, x: "60vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: "all", once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2 className="blue big">REWARDS</h2>
          <p>
            The total value of all sold NFT's are staked in a pool, this
            pool-reward is payed out equal over all the NFT holders. The price
            of every new minted NFT will increase, therefore the intrinsic value
            of all the NFT's in the collection will raise.
          </p>
        </motion.div>

        <img src={rewards} alt="Lorem" />
      </motion.div>
    </div>
  );
}

export default Rewards;
