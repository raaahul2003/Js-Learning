const prompt = require("prompt-sync") ({sigint:true})
let value = Number(prompt("Enter the Temperature: "))
console.log(" ");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");
console.log(" ");
let choice = Number(prompt("Enter your choice: "))

function convertTemp(value,choice){
    let f
    let c
    switch(choice){

    case 1:
        f=9/5*(value)+32
        console.log(`Fahrenheit = ${f}`);
        break

    case 2:
        c=5/9*(value-32)
        console.log(`Celsius = ${c}`);
        break
    }   
        
}

convertTemp(value,choice)