let numArray = [12,6,18,4,2,23,]


// Find smallest Number
    let smallest = numArray[0]
    for(let j=0; j<numArray.length; j++){
        if(smallest>numArray[j]){
            smallest=numArray[j] 
        }
    }console.log("Smallest Number is: ",smallest);


// Find Largest Number
    let largest = numArray[0]
    for(let j=0; j<numArray.length; j++){
        if(largest<numArray[j]){
            largest=numArray[j]
        }
    }console.log("Largest Number is; ",largest);

// find total sum of array number
    let sum = null
    for(let i=0; i<numArray.length; i++){
        sum = sum+numArray[i]
    }console.log("Total Sum: ",sum);

