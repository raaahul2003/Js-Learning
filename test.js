// // // fact by recursion

// // // function fact(num){
// // //     if(num==0 || num==1){
// // //         return 1
// // //     }else{
// // //       return fa =num*fact(num-1) 
        
// // //     }

// // // }

// // // console.log(fact(4));

// // // // find square of number
// // // function sqr(num){
// // //     return num**2
// // // }

// // // console.log(sqr(3));

// // // positive 

// // // const isPositive = (num) => num > 0;

// // // console.log(isPositive(4)); // false
// // // console.log(isPositive(5));

// // let numbers = [121, 56, 22, 34, 3, 11];

// // let changed = numbers.map(num => num > 25 ? num - 1 : num + 1);
// // // [13, 55, 23, 33, 4, 12]

// // let greaterThan20 = numbers.filter(num => num > 20);
// // // [56, 22, 34]

// // let firstGreaterThan20 = numbers.find(num => num > 20);
// // // 56

// // let total = numbers.reduce((sum, num) => sum + num, 0);
// // // 138

// // let largest = numbers.reduce((a, b) => a > b ? a : b);
// // // 56
// // // 
// // console.log(largest);


// let marks = [45, 67, 30, 80, 55, 25];

// // 1. Print every mark.
// for(let mark of marks){
//     console.log(mark);
    
// }
// // 2. Create a new array with only passing marks (mark >= 40).
// console.log("");

// let a= marks.filter(a => a>=40)
// console.log(a);


// // 3. Find the first mark above 70.
// console.log("");

// let b=marks.find(b=> b>70)
// console.log(b);

// // 4. Find the total marks using reduce.
// console.log("");

// console.log(marks.reduce((a,b)=>a+b));


// // 5. Find the highest mark using reduce.

// console.log("");
// console.log(marks.reduce((a,b)=>a>b?a:b));



// let book = {
//   title: "Atomic Habits",
//   author: "James Clear",
//   price: 500,
//   inStock: true
// };

// // 1. Print title and author.
//     console.log(`${book.title} - ${book.author}`);
    
// // 2. Add a key named pages with value 320.

//     book["pages"]=320
//     console.log(book);

// // 3. Change price to 450.

//     book.price=500
//     console.log(book);


// // 4. Check whether the key "publisher" exists.
//     console.log(book.hasOwnProperty("publisher"));
    

// // 5. Print all keys and all values.
//     console.log(Object.keys(book));
//     console.log(Object.values(book));
    
"----------------------------------------------------"

// 1. Function:
// Write an arrow function cube(num) that returns the cube of num.

const cube = (num)=>num**3
console.log(cube(3));

// 2. Array:
// From [10, 15, 20, 25, 30], create a new array containing only
// numbers divisible by 10.
   let array = [10, 15, 20, 25, 30]
   let a = array.filter(d => d%10==0)
   console.log(a);
   


// 3. Array:
// Find the sum of [5, 10, 15] using reduce.
    let arr = [5, 10, 15]
    let sum = arr.reduce((a,b)=> a+b)
    console.log(`Sum of array:  ${sum}`);
    

// 4. Object:
// Create an object named car with name, brand, and price.
// Then add a color property.
let car={
    name: "swift",
    brand: "auto",
    price: 1.2
}
car["color"]="red"
console.log(car);


// 5. Array of objects:
let students = [
  { name: "Anu", mark: 70 },
  { name: "Ravi", mark: 45 },
  { name: "Meera", mark: 85 }
];

// Print only the names of students with marks >= 50.
students.filter(a=> a.mark>=50).forEach(a => console.log(a.name))

