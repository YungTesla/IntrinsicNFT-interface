import "../../assets/Hero.css";
import { ReactComponent as Heroimage } from "../../assets/result.svg";

function Hero() {
  return (
    <div class="hero-container">
      <div class="hero-text">
        <h2>THE FIRST NFT WITH AN INTRINSIC-VALUE</h2>
        <p>
          Locked staking made easy, transparent and confirmed on the blockchain.
          The total value of all the sold NFT's are staked and pays out equally
          to all holders every month. Simply by holding an NFT you are owner of
          the staked pool and the additional earnings.
        </p>
        <button class="buy">see how it works</button>
        <button class="buy">see the collections</button>
      </div>
      <Heroimage className="hero-image" />
    </div>
  );
}

export default Hero;
