import { motion } from "framer-motion";
import voting from "../../../assets/images/voting.png";

function Voting() {
  return (
    <div className="container voting">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "all", once: true }}
        transition={{
          duration: 0.5,
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
          <h2 className="blue big">VOTING</h2>
          <p>
            By holding an NFT you are partial owner of the collection, each NFT
            gives the right to vote for the pool to stake in. Every month there
            is an election for the next staking pool to take part in.
          </p>
        </motion.div>
        <img src={voting} alt="Lorem" />
      </motion.div>
    </div>
  );
}

export default Voting;
