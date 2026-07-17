const prompt = require("prompt-sync")({sigint:true})

let a = prompt("Enter the Number: ")
let b = prompt("enter the Second Number: ")

let num1 = a
let num2 = b

let temp
    while(b!=0){
        temp = b
        b = a%b
        a = temp
    }

    console.log(`GCD of ${num1} ${num2} is ${a}`);
    

