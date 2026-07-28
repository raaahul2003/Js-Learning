// find duplicate numbers

let dup = [1,34,19,10,1,5,19,22]

    for(let i=0; i<dup.length; i++){

        for(let j=i+1; i<dup.length; j++){

            if(dup[i]==dup[j]){
                console.log(dup[i]);
                break
                
            }
        }
    } 
    