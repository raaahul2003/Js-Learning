const prompt = require("prompt-sync")({sigint:true})

let a = Number(prompt("Enter the Number: "))

console.log( a>=0?`${a} is Positive Number`:`${a} is negative Number` );
