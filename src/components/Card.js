import React from "react";
import PropTypes from "prop-types";

const HIDDEN_SYMBOL = "❓";

const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);

Card.propTypes = {
  card: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired
};

Card.defaultProps = {
  card: HIDDEN_SYMBOL,
  feedback: "hidden"
};

export default Card;
