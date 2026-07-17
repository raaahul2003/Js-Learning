const prompt = require("prompt-sync")({sigint:true})

let num = prompt("Enter the number: ")

let digit = null 
let sum = null

    while(num>0){
        digit = num%10
        sum = sum+digit
        num = Math.floor(num/10)
    }

    console.log(`Sum of digit is ${sum}`);
    