const prompt=require("prompt-sync")({sigint:true})
let num1 = prompt('Enter the Number: ')

let inp = num1
let digit = null
let pali = null


    while(num1>0){
        digit=num1%10;
        pali=pali*10+digit
        num1=Math.floor(num1/10)
    }

    console.log(inp==pali?`${inp} is a Palindrome`:`${inp} is a Not a Palindrome`);
    
    
    