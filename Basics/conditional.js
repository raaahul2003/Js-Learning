/*
//if condition checks only true condtion
let num=14

if(num>10){
    console.log(`${num} greater than 10`);
    
}


// if else condition use whether true condtion or else it is false
let age=14

if(age>=18){
    console.log(`Age is ${age} so eligible for voting`);
    
}else{
    console.log(`Age is ${age} so not eligible for voting`);
}

//if else ladder uses morethan two condition
numb=-9
if(numb>0){
    console.log(`${numb} Number is Positive`);
    
}
else if(numb<0){
    console.log(`${numb} Number is Negative`);
}
else{
    console.log(`${numb} Number is zero`);
}
*/


// truthy operator
const prompt=require('prompt-sync')({sigint:true})

// truthy operator
let num=prompt("Enter a number :")
num>10 && console.log(`${num} greater than 10`)

// Ternory Operator
let age=prompt("Enter Your Age :")
age>=18?console.log("Elgible for Voting"):console.log("Not Eligible for Voting");

