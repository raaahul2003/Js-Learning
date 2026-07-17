const prompt = require("prompt-sync")({sigint:true})
let num = prompt("Enter the Number: ")

let digit = null
let rev = null 
    for(let i=1; i<=num; i++){
        digit = num%10
        rev = rev*10+digit
        num = Math.floor(num/10)
    }
    console.log(rev);
    