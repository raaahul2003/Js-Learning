// finding an element in array


// Linear Search
const prompt = require("prompt-sync")({sigint :true})
let num = prompt("Enter the Number: ")

    let numAr =[12,6,18,4,2,23,]
    let numFound = false
    
    for(let a of numAr){
        if(num==a){
            numFound = true;
            break
        }
    }
    console.log(numFound?`Number Found ${num}`:`Number Not Found ${num}`);
    
    
// Binary search
