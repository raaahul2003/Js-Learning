// 6. Remove duplicates from a number array using reduce() function.

let numbers = [10, 20, 10, 30, 20, 40];

let removeDuplicate = numbers.reduce((result,number)=>{
    if(!result.includes(number)){
        result.push(number)
    }
    return result;
},[])

console.log(removeDuplicate);
