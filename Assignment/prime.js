// to print the next prime number near of given number

const prompt = require("prompt-sync") ({sigint:true})
let num = Number(prompt("Enter the number: "))

function isPrime(num){

    for(let i = num+1; ;i++){
        let count = 0
        
        for(let j=1; j<=i; j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
        console.log(`The Next Prime Number Is: ${i}`);
        break
    }   
    }
    
}
isPrime(num)