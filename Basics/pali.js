const prompt=require('prompt-sync')({sigint:true})
let num=prompt("Enter the Number: ")

let inp = num
let out = null
let digit = null

while(num>0){
    digit = num % 10
    out = out * 10 + digit 
    num = Math.floor(num / 10)
   
}

console.log(out==inp? `${inp} is a palindrome `:`${inp} Not a palindrome`);

