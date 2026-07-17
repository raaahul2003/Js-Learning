const prompt=require("prompt-sync")({sigint:true})

let num1 = Number(prompt('Enter the Number: '))

let isPrime = true
    for(let i=2; i<num1; i++){
        if(num1%i==0){
            isPrime = false
            break
        }
    }
    console.log(isPrime?`${num1} is prime number`:`${num1} is Not prime number `);
    