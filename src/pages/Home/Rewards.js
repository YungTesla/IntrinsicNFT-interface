import "../../assets/Rewards.css";

function Rewards() {
  return (
    <div className="container rewards">
      <div className="wrapper">
        <div className="text-wrapper">
          <h1>Rewards</h1>
          <p>
            The total value of all sold NFT's are staked in a pool, this
            pool-reward is payed out equal over all the NFT holders. The price
            of every new minted NFT will increase, therefore the intrinsic value
            of all the NFT's in the collection will raise.
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/250?grayscale"
            alt="Lorem"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Rewards;
