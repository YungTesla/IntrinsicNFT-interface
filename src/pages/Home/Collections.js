import "../../assets/Collections.css";
import Images from "../../components/Images";
import { useState } from "react";

function Collections() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div class="collection-container">
      <div class="card">
        <div class="description-wrapper">
          <h1>Title of collection</h1>
          <p>
            Nam massa augue, pretium vitae laoreet et, bibendum eu est. Sed
            auctor, ex vel commodo aliquam, nulla nisi varius nunc, a
            sollicitudin sem diam consectetur eros. Nullam pretium elit lectus,
            ac pulvinar eros laoreet vitae.
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
