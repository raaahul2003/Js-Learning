// w.a.p to find GCD of 2 Numbers
console.log("");
const prompt=require('prompt-sync')({sigint:true})
let num1=prompt("Enter the first number: ")
let num2=prompt("Enter the second number: ")

let min
    if(num1>num2){
        min = num2
    }else{
        min = num1
    }
let b=null
for(let i=1; i<=min; i++){
    if(num1%i==0 && num2%i==0){
        b=i
    }
}
console.log("");
console.log(`The GCD Number is : ${b}`);