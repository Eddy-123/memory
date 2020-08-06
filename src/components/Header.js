import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ gameState }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Memory
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Memory, the game is {gameState}</h1>
    </header>
  );
}

Header.propTypes = {
  gameState: PropTypes.string.isRequired
};
Header.defaultProps = {
  gameState: "in progress"
};
