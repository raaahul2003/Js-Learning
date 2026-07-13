// To Print an output console.log("")
// string
console.log(typeof"Welcome to javascripit")
console.log(typeof"10")
// numbers
console.log(typeof 10)
console.log(typeof 10.00)
// undefined
console.log(typeof hi)
// boolean
console.log(typeof true)
// undefined
var a
console.log(a)
// null
var b = null
console.log(b)

// the large number cant operate so we use big int
let bg=90007199254740991
let result=bg+2
console.log(result)

// in big int we use last n
let bg2=90007199254740991n
let result2=bg2+2n
console.log(result2)


let user={}

user["name"]="Anu"
user.age=32
console.log(user)

let age1=Symbol("age")
let age2=Symbol("age")

user[age1]=67
user.age2=42

// using var keyword
var firstData
firstData = "Hi"
console.log(firstData);
console.log(typeof firstData);

//we can var reinitalize
var firstData = 9455
console.log(firstData);
console.log(typeof firstData);

// hoisting method: when first print undefined beacuse the js acces all variables and function but dont initialize
console.log(z);
var z=10
console.log(z);


// let is a block scope
let i=10
for(let i=1; i<=5; i++){
    console.log(i);
    
}
console.log(i);

//1 2 3 4 5 10 - output

var j=10
for(var j=1; i<=5; i++){
    console.log(i);
    
}
console.log(i);

//1 2 3 4 5 6 - output






const pi=3.14
console.log(pi);

//cant re assign a const value
pi = 78.4
console.log(pi)




