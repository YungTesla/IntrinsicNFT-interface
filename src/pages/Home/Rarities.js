import React from "react";
import "../../assets/Rarities.css";
import RareItem from "../../components/RareItem";

function Rarities() {
  return (
    <div className="rare-container">
      <h1>Rarities</h1>
      <div className="rarities">
        <RareItem />
        <RareItem />
        <RareItem />
        <RareItem />
        <RareItem />
      </div>
    </div>
  );
}

export default Rarities;
