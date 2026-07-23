// Count even and odd Numbers

const prompt = require("prompt-sync") ({sigint:true})
let num = prompt("Enter the number: ")

let even = 0
let odd = 0
    for(let i=1; i<=num; i++){
        if(i%2==0){
            even++  
        }else{
            odd++
         }
        console.log(i);
        
        
    }
    console.log(`Even Numbers are ${even}`);
    console.log(`Odd Numbers are ${odd}`);
    