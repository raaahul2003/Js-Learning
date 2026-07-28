// To print the largest digit of given number

const prompt = require("prompt-sync") ({sigint:true})
let num = Number(prompt("Enter the number: "))

function largestDigit(){
    let max = 0
    let digit 
    while(num>0){
        digit = num%10
        if(max>=digit){
            max=max
        }else{
            max=digit
        }
        num=Math.floor(num/10)
    }
    return max
}
console.log(`Largest of This Number is: ${largestDigit(num)}`);
