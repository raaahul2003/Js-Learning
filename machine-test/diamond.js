// for(let row=1; row<=5; row++){
//     let pattern=""
//     for(let space=4; space>=row; space--){
//         pattern+=" "
//     }
//     for(let col=1; col<=row; col++){
//         pattern+="* "
//     }
//     console.log(pattern);
    
// }
// for(let row2=4; row2>0; row2--){
//     let pattern2=""
//     for(let space2=4; space2>=row2; space2--){
//         pattern2+=" "
//     }
//     for(let col2=1; col2<=row2; col2++){
//         pattern2+="* "
//     }
//     console.log(pattern2);
    
// }





for(let row=1; row<=9; row++){
    let pattern=""
    for(let space=8; space>=row; space--){
        pattern+=" "
    }
    
    for(let col=1; col<=row; col++){
        if(row%2!=0){
            pattern+="* "
        }
    }
    console.log(pattern);
    
}
for(let row=8; row>0; row--){
    let pattern=""
    for(let space=8; space>=row; space--){
        pattern+=" "
    }
    for(let col=1; col<=row; col++){
        if(row%2!=0){
            pattern+="* "
        }
    }
    console.log(pattern);
    
}





