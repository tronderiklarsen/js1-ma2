//1

/*
const myFunctionExpression = function() {
    console.log("Trond");
}
*/

//2

/*
const button = document.querySelector(".btn");

function clickCall() {
    console.log('I was clicked');
}

button.addEventListener("click", clickCall);
*/

//3

/*
const textField = document.querySelector("#firstName");

function keyLogger(event) {
    console.log(event.target.value) 
}

textField.addEventListener("keydown", keyLogger);
*/

//4

/*
const secondButton = document.querySelector("button");

function addClass() {
    secondButton.classList.add("hover");
}

secondButton.addEventListener("mouseover", addClass);
*/

//5

/*
const thirdButton = document.querySelector("[data-animal='dog']");

function removeClass(){
    thirdButton.classList.remove("hover");
}

thirdButton.addEventListener("mouseout", removeClass);
*/

//6

/*
const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", dataValue)
}

function dataValue(event){
    console.log(event.target.dataset.animal)
}
*/

//7

/*
const animal = "cow";

switch(animal) {

    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}
*/

//8

/*
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(bovidea) {
    console.log(bovidea);
});
*/

//9

/*
function wordLog(){
    console.log("hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;
}

let counter = 0;

const intervalId = setInterval(wordLog, 500);
*/

//10

/*
const timeoutContainer = document.querySelector("div.container");

function updateDiv(){
    timeoutContainer.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
*/