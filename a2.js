// finding an element in array

const prompt = require("prompt-sync")({sigint :true})
let num = prompt("Enter the Number: ")

    let numAr =[10,20,30,40,50]
    let numFound = false
    
    for(let a of numAr){
        if(num==a){
            numFound = true;
            break
        }
    }
    console.log(numFound?`Number Found ${num}`:`Number Not Found ${num}`);
    
    
    