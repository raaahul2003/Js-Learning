const prompt = require("prompt-sync")({sigint:true})

let num1 = Number(prompt("Enter the 1st number: "))
let num2 = Number(prompt("Enter the 2nd number: "))
let num3 = Number(prompt("Enter the 3rd number: "))

let smallest = num1;

if(num2<smallest){
    smallest=num2;
}
if(num3<smallest){
    smallest= num3;
}

console.log(`Smallest is ${smallest}`);
