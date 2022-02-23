import "../../assets/Royalties.css";

function Royalties() {
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <img
            src="https://picsum.photos/250?grayscale"
            alt="Lorem"
            className="image"
          />
        </div>
        <div className="royalty-wrapper">
          <h1>Royalties</h1>
          <p>
            Every minted NFT increases in value, therefore it will be
            interesting to sell your NFT. A small amount of 10% of the
            selling-price will be paid as a royalty to increase the total staked
            value. In that way the intrinsic value of your NFT will become
            higher with every trade.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Royalties;
