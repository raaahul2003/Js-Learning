//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 

for(let row=1; row<=5; row++){
    let pattern=""
    for(let col=1; col<=5; col++){
        pattern+=" * "
    }
        console.log(pattern);
        
}

console.log("-----------------------");

//  * 
//  *  * 
//  *  *  * 
//  *  *  *  * 
//  *  *  *  *  * 

for(let row=1; row<=5; row++){
    let pattern=""
    for(let col=1; col<=row; col++){
        pattern+=" * "
    }
        console.log(pattern);
        
}

console.log("-----------------------");

// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 

for(let row=1; row<=5; row++){
    let pattern=""
    for(let col=1; col<=row; col++){
        pattern+=row+" "
    }
        console.log(pattern);
        
}

console.log("-----------------------");

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

for(let row=1; row<=5; row++){
    let pattern=""
    for(let col=1; col<=row; col++){
        pattern+=col+" "
    }
        console.log(pattern);
        
}

console.log("-----------------------");

//      * 
//     *  * 
//    *  *  * 
//   *  *  *  * 
//  *  *  *  *  * 

for(let row=1; row<=5; row++){
    let pattern=""
    for(let s=4; s>=row; s--){
        pattern+=" "
    }
    for(let col=1; col<=row; col++){
        pattern+=" * "
    }
        console.log(pattern);
        
}