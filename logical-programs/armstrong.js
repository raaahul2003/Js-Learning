const prompt = require("prompt-sync")({sigint:true})

let num1 = prompt("Enter the Number: ")

let inp = num1
let digit = null
let arm = null
    while(num1>0){
        digit=num1%10
        arm=arm+digit**3
        num1=Math.floor(num1/10)
    }
    console.log(inp==arm?`${inp} is Armstrong`:`${inp} is not Armstrong`);
    

    
    