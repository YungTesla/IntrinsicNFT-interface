import React from "react";
import "../../assets/css/Rarities.css";
import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import bronse from "../../assets/images/bronse.png";

function Rarities() {
  return (
    <div className="rare-container">
      <h2 className="blue bigger">
        <span class="dot green"></span> &nbsp; RARITIES &nbsp;
        <span class="dot"></span>
      </h2>
      <div className="imageWrapper">
        <img src={gold} style={{ width: "25%" }} alt="gold" />
        <img src={silver} style={{ width: "25%" }} alt="silver" />
        <img src={bronse} style={{ width: "25%" }} alt="bronse" />
      </div>
    </div>
  );
}

export default Rarities;
