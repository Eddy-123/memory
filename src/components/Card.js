import React from "react";

const Card = ({ card, feedback }) => (
  <div className={`card ${feedback}`}>
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);

export default Card;
