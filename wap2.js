// 2. To find second largest number among 3 numberand display them in any sorted order

var num1 = 9
var num2 = 30
var num3 = 24

if(num1>num2&&num1>num3){
    if(num2>num3){
        console.log(`Second Largest Number is ${num2}`);
        console.log(`Sorted ${num3}<${num2}<${num1}`);
    }
    else{
        console.log(`Second Largest Number is ${num3}`);
        console.log(`Sorted ${num2}<${num3}<${num1}`);
    }
}
else if(num2>num3){
    if(num1>num3){
        console.log(`Second Largest Number is ${num1}`);
        console.log(`Sorted ${num3}<${num1}<${num2}`);
    }
    else{
        console.log(`Second Largest Number is ${num3}`);
        console.log(`Sorted ${num1}<${num3}<${num2}`);
    }

}
else{
    if(num1>num2){
        console.log(`Second Largest Number is ${num1}`);
        console.log(`Sorted ${num2}<${num1}<${num3}`);
    }
    else{
        console.log(`Second Largest Number is ${num2}`);
        console.log(`Sorted ${num1}<${num2}<${num3}`);
    }
}
