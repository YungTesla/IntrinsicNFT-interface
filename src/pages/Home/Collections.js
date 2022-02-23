import "../../assets/Collections.css";
import Images from "../../components/Images";
import { useState } from "react";

function Collections() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div class="collection-container">
      <div class="card">
        <div class="description-wrapper">
          <h1>INTRINSIC NFT X SUSHISWAP COLLECTION</h1>
          <p>
            SushiSwap is a populair Decentralized Finance (DeFi) application.
            SushiSwap provides a platform where users can buy and sell crypto
            assets, it uses a collection of liquidity pools to achieve this
            goal. Users first lock up assets into smart contracts, and traders
            then buy and sell cryptocurrencies from those pools, swapping out
            one token for another. As a liquidity provider you will also receive
            trade fee reward.
          </p>
          <Images />
          <div class="buy-container">
            <div class="quantity-wrapper">
              <button
                class="sum"
                onClick={() => setQuantity((quantity) => quantity - 1)}
              >
                -
              </button>
              <input
                class="quantity"
                type="numbers"
                name="name"
                value={quantity}
              />
              <button
                class="sum"
                onClick={() => setQuantity((quantity) => quantity + 1)}
              >
                +
              </button>
            </div>
            <button class="buy">BUY INTRINSIC NFT</button>
          </div>
        </div>
        <div class="collection">
          <div class="collection-item">Parameter</div>
          <div class="collection-item">Parameter</div>
          <div class="collection-item">Parameter</div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
