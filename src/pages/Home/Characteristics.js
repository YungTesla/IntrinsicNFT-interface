import Voting from "./Voting";
import Royalties from "./Royalties";
import Rewards from "./Rewards";
import "../../assets/Characteristics.css";
import { motion } from "framer-motion";

function Characteristics() {
  return (
    <div className="Char">
      <motion.h2
        className="green bigger"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "all", once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <span class="dot"></span> &nbsp; BASIC PRINCIPLES &nbsp;
        <span class="dot"></span>
      </motion.h2>
      <Rewards />
      <Royalties />
      <Voting />
    </div>
  );
}

export default Characteristics;
