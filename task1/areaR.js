
const prompt = require("prompt-sync") ({sigint:true})
let length = Number(prompt("Enter the Length: "))
let breadth = Number(prompt("Enter the Breadth: "))

function areaRectangle(length,breadth){
    return length*breadth
}
console.log(`Area of Rectangle: ${areaRectangle(length,breadth)}`);
