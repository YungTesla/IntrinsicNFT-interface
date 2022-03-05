import Voting from "./Voting";
import Royalties from "./Royalties";
import Rewards from "./Rewards";
import "../../assets/Characteristics.css";

function Characteristics() {
  return (
    <div className="Char">
      <Rewards />
      <Royalties />
      <Voting />
    </div>
  );
}

export default Characteristics;
