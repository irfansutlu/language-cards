import "./card.css";
import CardBack from "./cardBack";
import CardFront from "./cardFront";
import React, { useState } from "react";

const Card = (items) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card" onClick={() => setClicked((prev) => !prev)}>
      {selectSide(clicked, items)}
    </div>
  );
};

const selectSide = (clicked, items) => {
  if (clicked) {
    return <CardBack options={items.options} />;
  } else {
    return <CardFront name={items.name} img={items.img} />;
  }
};

export default Card;
