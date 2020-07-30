import React from "react";

export default function Header({ gameState }) {
  return (
    <header>
      <h1>Memory, the game is {gameState}</h1>
    </header>
  );
}
