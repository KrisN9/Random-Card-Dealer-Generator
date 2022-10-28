/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let lista = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
window.onload = function() {
  //write your code here
  let num = document.querySelector("#numeros");
  let lista = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let valor = Math.floor(Math.random() * lista.length);
  num.innerHTML = valor;
  console.log(valor);
};
