import React, { Component } from "react";
import shuffle from "lodash.shuffle";

import GuessCount from "./GuessCount";
import Card from "./Card";

import { countWords } from "./FunctionalComponent";

const adults = [],
  minors = [];
const people = [
  { name: "Francky", age: 22, matricule: 4423160193 },
  { name: "Sawadogo Ouedraogo", age: 17, matricule: 1234567890 }
];
people.forEach(person => {
  if (person.age >= 18) {
    adults.push(person);
  } else {
    minors.push(person);
  }
});

const SIDE = 6;
const SYMBOLS = "😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿";

export default class Body extends Component {
  generateCards() {
    const result = [];
    const size = SIDE * SIDE;
    const candidates = shuffle(SYMBOLS);
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card);
    }
    return shuffle(result);
  }

  //Arrow fx for binding
  handleCardClick = card => {
    console.log(card, this);
  };

  render() {
    const cards = this.generateCards();
    return (
      <div>
        <div className="people">
          {people.map(person => (
            <p key={person.matricule}>
              {person.name} has {countWords(person.name)} words
            </p>
          ))}
        </div>
        <div className="memory">
          <GuessCount guesses={10} />
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              feedback="visible"
              onClick={this.handleCardClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
