let arr = [12,56,22,34,3,11]

// adding 1 lessthan 25 and minus 1 greaterthan 25
console.log(arr.map(num=>num>25?num-1:num+1));

//total sum of array
console.log(`Total Sum: ${arr.reduce((sum,num)=> num+sum,0)}`);

// smallest number of array
console.log(`Smallest Number is: ${arr.reduce((a,b)=> a<b?a:b)}`);

// Grestest number of array
console.log(`Greatest Number is: ${arr.reduce((a,b)=> a>b?a:b)}`);


