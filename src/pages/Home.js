import Hero from "./Home/Hero";
import Collections from "./Home/Collections";
import Rewards from "./Home/Rewards";
import Royalties from "./Home/Royalties";
import Calculator from "./Home/Calculator";
import Voting from "./Home/Voting";
import Rarities from "./Home/Rarities";

function Home() {
  const mystyle = {};

  return (
    <div style={mystyle}>
      <Hero />
      <Collections />
      <Rewards />
      <Royalties />
      <Voting />
      <Calculator />
      <Rarities />
    </div>
  );
}

export default Home;
