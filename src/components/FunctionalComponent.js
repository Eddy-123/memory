import React from "react";

export function countWords(text) {
  return text.split(/\W+/u).filter(Boolean).length;
}

export function normalizeSpacing(text) {
  return text.replace(/\s+/u, " ").trim();
}

export function CoolComponent() {
  return <p>The coolest functional component</p>;
}
