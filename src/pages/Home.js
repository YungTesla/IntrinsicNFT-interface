import Hero from "./Home/Hero";
import Collections from "./Home/Collections";
import Rewards from "./Home/Rewards";
import Royalties from "./Home/Royalties";
import Calculator from "./Home/Calculator";
import Voting from "./Home/Voting";
import Rarities from "./Home/Rarities";
import Process from "./Home/Process";

function Home() {
  const mystyle = {};

  return (
    <div style={mystyle}>
      <Hero />
      <Collections />
      <Calculator />
      <Rewards />
      <Royalties />
      <Voting />
      <Rarities />
      <Process />
    </div>
  );
}

export default Home;
