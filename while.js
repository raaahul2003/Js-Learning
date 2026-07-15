
// console.log("");
// console.log("//To print 1 - 10");
// console.log("");

// let i = 1

// while(i <=10 ){

//     console.log(i);
//     i++
    
// }


// console.log("");
// console.log("// to print 1 - 50 even numbers");
// console.log("");

// let n=1

// while( n<=50  ){
//     if(n%2 === 0){
//     console.log(n);
//     }
//     n++
    
// }



// console.log("");
// console.log("// Print 5 - 1");
// console.log("");

// let a=5

// while( a >= 1 ){
//     console.log(a);
//     a--
    
// }


// console.log("");
// console.log("// print  sum 1 to 10 ");
// console.log("");

// let sum = null
// let m = 1

//     while(m <= 10){
//         sum+=m
//         m++
//         // console.log(sum);
        
//     }
//     console.log(sum);

const prompt=require('prompt-sync')({sigint:true})
// console.log("");
// console.log("// print reverse of number")
// console.log("");

let out=null
let digit=null
let num=prompt("Enter the number: ")

while(num>0){
    digit = num % 10 
    out = out * 10 + digit
    num = Math.floor(num / 10)
}
console.log(out);



