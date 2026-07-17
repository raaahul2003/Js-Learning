const prompt = require("prompt-sync")({sigint:true})

let a = Number(prompt("Enter the Number: "))

if(a%15==0){
    console.log("FIZZBUZZ");
}else if(a%3==0){
    console.log("FIZZ");
}else if(a%5==0){
    console.log("BUZZ");
}