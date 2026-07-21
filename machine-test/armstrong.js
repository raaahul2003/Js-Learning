const prompt = require("prompt-sync")({sigint :true})

let num = Number(prompt("Enter a Number: "))

let inp1 = num
let inp2 = num
let digit = null
let arm = null
let count = 0
    
    while(inp1>0){
        count++
        inp1 = Math.floor(inp1/10)
    }
    console.log(count);
    
    while(num>0){
        
        digit = num%10;
        arm = arm+digit**count;
        num = Math.floor(num/10)
    }
    // console.log(arm);
    
    console.log(arm==inp2?`${inp2} Is Armstrong`:`${inp2} Is Not Armstrong`);
    