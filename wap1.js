// wap 
// 1. To print 'fizz' when a number is divisible by 3.  "Buzz" if number is divisible by 5 and "fizzbuzz" if number is divisible b 15



var num = 31


if (num%3==0){
    console.log("FIZZ");
}

if(num%5==0){
    console.log("BUZZ");
    
}

if (num%15==0){
    console.log("FIZZBUZZ");
}
else{
    console.log(`${num} Not divisible by 3, 5, 15`);
    
}


