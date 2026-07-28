const prompt = require('prompt-sync')({sigint:true})

// w.a.p to check given email is valid or not

// let email = prompt("Enter Your emai: ")
// console.log(email.endsWith("@gmail.com")?`${email} is a Valid Email`:`${email} is Not valid email`);


// let word="Malayalam", check given word is starts with "Ma"

// let word="Malayalam"
// console.log(`word is starts with "Ma": ${word.startsWith("Ma")?`Yes`:`No`}`);


// display word count of given paragrapgh
// let para = "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning"
// console.log(`Word Count In Paragrapgh Is: ${para.split(" ").length}`);


// display vowels from given data

    // let data = "hello hai"
    // let vowels = ["a",'e',"i","o","u"]
    // console.log(data.split("").filter(char => vowels.includes(char)));
    


//search a string is available in the product array . it return an array of prdoucts which includes the given string ,other wise display no product are available

products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]

let search = prompt("Enter the word: ")
let searchArray = products.filter(pro => pro[1].includes(search))
if(searchArray.length>0){
    console.log(searchArray.map(a => a[1]));
    
}else{
    console.log(`No Products with ${search}`);
    
}


