/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = ["&#9829;", "&#9830;", "&#9824;", "&#9827;"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

window.onload = () => {
  //write your code here
  document.querySelector("p").innerHTML = generateRandomNumber();
  generateRandomSuit();
};
const Suits = document.querySelectorAll(".card-suit");
const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};

const generateRandomSuit = () => {
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  for (let x = 0; x < Suits.length; x++) {
    Suits[x].innerHTML = randomSuit;
    if (randomSuit == "&#9829;" || randomSuit == "&#9830;")
      Suits[x].style.color = "red";
  }
};
