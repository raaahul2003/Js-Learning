const prompt=require('prompt-sync')({sigint:true})
let num = prompt('Enter the Numeber :')

let inp = num
let sum = null
let digit = null

while(num>0){
    digit = num % 10
    sum = out + digit**3
    num = Math.floor(num / 10)
}


console.log(sum==inp? `${inp} is a armstrong `:`${inp} Not a armstrong`);

