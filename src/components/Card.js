import React from "react";
import PropTypes from "prop-types";

const HIDDEN_SYMBOL = "❓";

const Card = ({ card, feedback, onClick, index }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(index)}>
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);

Card.propTypes = {
  card: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    "hidden",
    "justMatched",
    "justMismatched",
    "visible"
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

Card.defaultProps = {
  card: HIDDEN_SYMBOL,
  feedback: "hidden"
};

export default Card;
