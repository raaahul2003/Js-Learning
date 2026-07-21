// const prompt = require("prompt-sync")({sigint :true})

// let num = Number(prompt("Enter a Number: "))

// for( let row=1; row<=num; row+=2){
//     let pattern = ""
//     for(let s=num; s>row; s--){
//         pattern+=" "
//     }
//     for(let col=1; col<=2*row-1; col+=2){
//        if(col==1|| col==2*row-1 || row==num){
//         pattern+="* "
//        }else{
//         pattern+="  "
//        }
//     }
//     console.log(pattern);    
// }

// const prompt = require("prompt-sync")({sigint :true})

// let num = Number(prompt("Enter a Number: "))

for( let row=1; row<=4; row++){
    let pattern = ""
    for(let col=1; col<=7; col++){
       if(col-row==3|| col+row==5 || row==4){
        pattern+="* "
       }else{
        pattern+="  "
       }
    }
    console.log(pattern);    
}