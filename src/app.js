import "bootstrap";
import "./style.css";

let simbolos = ["♠", "♣", "♥", "♦"];
let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"];

let simbolosuperior = document.querySelector(".headcard");
let numero = document.querySelector(".bodycard");
let simboloinferior = document.querySelector(".footercard");

function SeleccionCarta(arr1, arr2){
    let carta =[]
    carta.push(arr1[Math.floor(Math.random()*arr1.length)]);
    carta.push(arr2[Math.floor(Math.random()*arr2.length)]);
    return carta
}
function Color(arr){
    if(arr[0] === "♥" || arr[0] === "♦"){
        simbolosuperior.style.color = "red";
        numero.style.color = "red";
        simboloinferior.style.color = "red";
    }
    else{
        simbolosuperior.style.color = "black";
        numero.style.color = "black";
        simboloinferior.style.color = "black";
    }
}
function Valor(arr){
    simbolosuperior.innerHTML = arr[0];
    numero.innerHTML = arr[1];
    simboloinferior.innerHTML = arr[0];
}
function generacionCarta(){
    let carta = SeleccionCarta(simbolos, valores);
    Color(carta);
    Valor(carta);
}
window.onload = function(){generacionCarta()}