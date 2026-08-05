const prompt=require('prompt-sync')({sigint:true})
let num = prompt('Enter the Numeber :')

let number = null
i = 1

while(i <= num){
    number = number*10+i
    i++
}
console.log(number*num);



