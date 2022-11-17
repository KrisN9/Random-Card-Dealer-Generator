/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = ["♦", "♥", "♠", "♣"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

window.onload = () => {
  //write your code here
  document.querySelector("p").innerHTML = generateRandomNumber();
  document.querySelectorAll("span").innerHTML = generateRandomSuit();
};

const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};

const generateRandomSuit = () => {
  let randomSuit = Math.floor(Math.random() * suits.length);
  return suits[randomSuit];
};
