//To print sum of given factoial  number

const prompt = require("prompt-sync") ({sigint:true})
let num = Number(prompt("Enter the number: "))

function facorial(num){
    let sum=0
    for(let i=1; i<=num; i++){
        let fact=1
        for(let j=1; j<=i; j++){
            fact *= j
        }
        sum+=fact
    }
    return sum
}

console.log(`Sum of factorial : ${facorial(num)}`);


