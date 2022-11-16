/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = ["♦", "♥", "♠", "♣"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

window.onload = () => {
  //write your code here
  document.querySelector(".card").addEventListener("click", event => {});
};

const deckBuilder = () => {
  const card = [];
  for (let s = 0; s < suits.length; s++) {
    for (let n = 0; n < numbers.length; n++) {
      const number = numbers[n];
      const suit = suits[s];
      card.push({ number, suit });
    }
  }
  return card;
};
const randomCard = card => {};
const card = deckBuilder();
randomCard(card);
