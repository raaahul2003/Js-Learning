const prompt = require("prompt-sync")({sigint :true})
let num = prompt("Enter the Number: ")

let numAr =[12,6,18,4,2,23,]
    numAr.sort((a,b)=>a-b)

    let L = 0
    let U = numAr.length-1
    let isFound = false
    let count=0
    
   while(L <= U) {
    count++
    let mid = Math.floor((L+U)/2)
    if(numAr[mid]==num){
        isFound = true
        break

    }else if(numAr[mid]<num){
        L=mid+1
    }else{
        U=mid-1
    }
    }

    console.log(`Total Count of Loop: ${count}`);
    console.log(isFound?`${num} is Found`:`${num} Not Found`);
    
    
    

    