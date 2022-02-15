import "../assets/Images.css";
import { useState } from "react";

function Images() {
  const [imageKey, setImageKey] = useState(0);

  return (
    <div class="imageWrapper">
      <button class="prev" onClick={() => setImageKey((key) => key - 1)}>
        &#10094;
      </button>
      <img
        src="https://picsum.photos/350?grayscale"
        alt="Lorem"
        className="image"
        key={imageKey}
      />
      <button class="next" onClick={() => setImageKey((key) => key + 1)}>
        &#10095;
      </button>
    </div>
  );
}

export default Images;
