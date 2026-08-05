// To print the cube of given number

const prompt = require("prompt-sync") ({sigint:true})
let num = Number(prompt("Enter the number: "))
console.log("");

let output
function cube(num){
    for(let i=1;i<=num;i++)
    console.log(`Cube of ${i} is: ${i**3}`);
}
cube(num)


