const prompt = require("prompt-sync") ({sigint :true})

let num = prompt("Enter the Number: ")

let num1=0
let num2=1

    for(let i=0; i<=num; i++){
        console.log(num1);

        let num3 = num1+num2; 
            num1 = num2
            num2 = num3
        
    }