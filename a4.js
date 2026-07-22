// print the pair whose sum = 7
array = [2,3,4,5]
for(let i = 0; i<array.length; i++){
    for(let j=i+1;j<array.length; j++){
        if( 7 == array[i]+array[j] )
            console.log(`Pair Of Sum 7 = ${array[i]} + ${array[j]}`);
    }
}


console.log("-------------");


// // print all common numbers
p1=[2,5,7,10,14,50]
p2=[12,5,74,1,14,50]

    for(let a=0; a<p1.length; a++){
        for(let b=0; b<p2.length; b++){
            if(p1[a]==p2[b]){
                console.log(`The Common Number is ${p1[a]}`); 
                break
            }
        }
    }
