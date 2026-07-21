const prompt = require("prompt-sync")({sigint :true})

let num = Number(prompt("Enter a Number: "))

let count = null

while(num>0){
    count++
    num = Math.floor(num/10)

}

console.log(`Count of the digit is ${count}`);
