import React from "react";

import "./styles.css";
import { countWords } from "./components/textUtils";

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
export default function App() {
  return (
    <div className="App">
      {people.map(person => (
        <p>
          {person.name} has {countWords(person.name)} words
        </p>
      ))}
    </div>
  );
}
