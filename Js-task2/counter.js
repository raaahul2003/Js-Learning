// 8. Write a fuction that return the numer of times its called using closure

//      Eg:
//      counter(); // 1
//      counter(); // 2
//      counter(); // 3

 function counter1(){
    let count = 0

    function counter2(){
        count++
        return count;
    }

    return counter2
}

let counter = counter1();

console.log(counter());
console.log(counter());
console.log(counter());

