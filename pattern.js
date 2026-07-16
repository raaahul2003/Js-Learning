// w.a.p to print following pattern

// *    *   *   *
// *    *   *   *
// *    *   *   *
// *    *   *   *


for( let row=1; row<=4; row++){
    let pattern = ""
    for(let col=1; col<=4; col++){
        pattern+=" # "
    }  
    console.log(pattern);
    console.log();
      
}

console.log();
console.log("-----------------------------");


// w.a.p to print following pattern

// 1    1   1   1
// 2    2   2   2
// 3    3   3   3
// 4    4   4   4

for( let row=1; row<=4; row++){
    let pattern = ""
    for(let col=1; col<=4; col++){
        pattern+= " "+row+" "
    }  
    console.log(pattern);
    console.log();
      
}

console.log();
console.log("-----------------------------");

// w.a.p to print following pattern

// 1    2   3   4
// 1    2   3   4
// 1    2   3   4
// 1    2   3   4

for( let row=1; row<=4; row++){
    let pattern = ""
    for(let col=1; col<=4; col++){
        pattern+= " "+col+" "
    }  
    console.log(pattern);
    console.log();
      
}

console.log();
console.log("-----------------------------");

// w.a.p to print following pattern

// *    
// *    *  
// *    *   *   
// *    *   *   *


for( let row=1; row<=5; row++){
    let pattern = ""
    for(let col=1; col<=row; col++){
        pattern+= " * "
        
    }  
    console.log(pattern);
    console.log();
      
}

console.log();
console.log("-----------------------------");

// w.a.p to print following pattern

// 1
// 2    2
// 3    3   3
// 4    4   4   4   
// 5    5   5   5   5


for( let row=1; row<=5; row++){
    let pattern = ""
    for(let col=1; col<=row; col++){
        pattern+= " "+row+" "
        
    }  
    console.log(pattern);
    console.log();
      
}

console.log();
console.log("-----------------------------");

// w.a.p to print following pattern

// 1
// 1    2
// 1    2   3
// 1    2   3   4   
// 1    2   3   4   5

for( let row=1; row<=5; row++){
    let pattern = ""
    for(let col=1; col<=row; col++){
        pattern+= " "+col+" "
        
    }  
    console.log(pattern);
    console.log();
      
}

console.log();
console.log("-----------------------------");