const prompt=require("prompt-sync")({sigint:true})

let num1 = Number(prompt('Enter the Number: '))

let fact = 1
    for(let i=1; i<=num1; i++){
        fact*=i
    }
    console.log(`factorial of ${num1} is ${fact}`);
    