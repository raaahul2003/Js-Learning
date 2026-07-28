// function declaration without parameters

// Function Decleration
function greet(){
    console.log("Hello, Welcome");
    
}

greet()


// function declaration  parameters
function add(a,b){

    console.log(`${a} + ${b} = ${a+b}`);
    
    
}

add(90,60)


// function declaration parameters with return 
function multiply(a,b){

    return a*b
    
    
    
}

console.log(`${multiply(4,2)}`);


// function expression - assigned to a variable 

let greeting=function(){
    console.log("Bye , India");
    
}

greeting()

// Arrow Function
//  Not hoisted 



const greets=()=>{
        console.log("Welcome to India");
        
}
greets()

// single line of code no braces no return needeed
const multi=(a,b)=>a*b

console.log(`${multi(4,10)}`);



// callback function uses to call one function to another function
//  is a asynchronus

function gret(name){
    console.log("hello "+name);
    
}

function processUser(callback){
    callback("Rahul")
}

processUser(gret)

// setTimer 
setTimeout(function(){
    console.log('After 3sec');
    
},3000)


// nested function


function parent(){
    let parentData = "parentData"
    console.log("Parent");
    
    child()
    function child(){
        let childData = "chilData"
        console.log("Child");
        
    }
}
parent()

// closure property
function outer(){
    let x = "Rahul"
    function inner(){
        console.log(x);
    }
    return inner
}
let output = outer()
output()


// Recursive Function

const prompt=require('prompt-sync')({sigint:true})
let num=prompt("Enter the Number: ")

function fact(num){
    if(num == 0 || num == 1){
        return 1
    }
    return num*fact(num-1)
}

console.log(`Factorial is: ${fact(num)}`);


