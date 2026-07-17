// How to add two numbers

const prompt=require("prompt-sync")({sigint:true})

let num1 = prompt("Enter the Number: ")
let num2 = prompt("Enter the Second Number: ")

let sum = num1 + num2;
console.log(`Total Sum of the Number: ${sum}`);
