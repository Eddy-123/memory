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
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: []
  };

  //  "😀",  "🎉",  "💖",  "🎩",  "🐶",  "🐱",  "🦄",  "🐬",  "🌍",  "🌛",  "🌞",  "💫",  "🍎",  "🍌",  "🍓",  "🍐",  "🍟",  "🍿",  "😀",  "🎉",  "💖",  "🎩",  "🐶",  "🐱",  "🦄",  "🐬",  "🌍",  "🌛",  "🌞",  "💫",  "🍎",  "🍌",  "🍓",  "🍐", "🍟",  "🍿"

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

  // Arrow fx for binding
  handleCardClick = index => {
    const { currentPair } = this.state;

    if (currentPair.length === 2) {
      return;
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] });
      return;
    }

    this.handleNewPairClosedBy(index);
  };

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state;
    const indexMatched = matchedCardIndices.includes(index);

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? "visible" : "hidden";
    }

    if (currentPair.includes(index)) {
      return indexMatched ? "justMatched" : "justMismatched";
    }

    return indexMatched ? "visible" : "hidden";
  }

  //handleNewPairClosedBy() {}
  render() {
    const { cards, guesses, matchedCardIndices } = this.state;
    const won = matchedCardIndices.length === cards.length;
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
          <GuessCount guesses={guesses} />
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              card={card}
              feedback={this.getFeedbackForCard(index)}
              onClick={this.handleCardClick}
            />
          ))}
        </div>
        <div>{won && <h5>Gagné</h5>}</div>
      </div>
    );
  }
}
