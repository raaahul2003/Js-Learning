// Array declaration

let weekDay = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday" ]
// check type of array
console.log(typeof weekDay);

//print the full array
console.log(weekDay);

// print a specific content from array
console.log(weekDay[2]);

// print the length of array
console.log(weekDay.length);

// to print last item in an array
console.log(weekDay[weekDay.length-1]);

console.log("----------");
// to print all element by for loop
    for(let i=0; i<weekDay.length; i++){
        console.log(weekDay[i]);
        
    }
console.log("----------");

// to print all element by for-of loop
    for(let day of weekDay){
        console.log(day);
        
    }

// to print all element by for-in loop 
// can get the index values by for-in loop
    for(let i in weekDay){
        console.log(i); 
        
    }    