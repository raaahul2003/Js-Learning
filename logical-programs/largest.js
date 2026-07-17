const prompt = require("prompt-sync")({sigint:true})

let num1 = Number(prompt("Enter the 1st number: "))
let num2 = Number(prompt("Enter the 2nd number: "))
let num3 = Number(prompt("Enter the 3rd number: "))

if(num1>num2 && num1>num3){
    console.log(`greatest number is ${num1}`);
    
}
else if(num2>num1 && num2>num3){
    console.log(`greatest number is ${num2}`);
    
}else{
    console.log(`greatest number is ${num3}`);
}