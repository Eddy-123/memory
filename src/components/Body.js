import React from "react";

import GuessCount from "./GuessCount";
import Card from "./Card";

import { countWords } from "./FunctionalComponent";

const adults = [],
  minors = [];
const people = [
  { name: "Francky", age: 22 },
  { name: "Sawadogo Ouedraogo", age: 17 }
];
people.forEach(person => {
  if (person.age >= 18) {
    adults.push(person);
  } else {
    minors.push(person);
  }
});

export default function Body() {
  return (
    <body>
      <div className="people">
        {people.map(person => (
          <p>
            {person.name} has {countWords(person.name)} words
          </p>
        ))}
      </div>
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" />

        <Card card="🎉" feedback="justMatched" />

        <Card card="💖" feedback="justMismatched" />

        <Card card="🎩" feedback="visible" />

        <Card card="🐶" feedback="hidden" />

        <Card card="🐱" feedback="justMatched" />
      </div>
    </body>
  );
}
