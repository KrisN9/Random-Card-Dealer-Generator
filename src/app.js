/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = ["♦", "♥", "♠", "♣"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

window.onload = () => {
  //write your code here
  document.querySelector("h4").innerHTML = generateRandomSuit();
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};

const generateRandomSuit = () => {
  let randomSuit = Math.floor(Math.random() * suits.length);
  return suits[randomSuit];
};
