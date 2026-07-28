// [id,name,price,stock]

products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]

// display all product name
// dispaly product and price whose price<50
// print price of oreo
// print costly product name
// display out of stock product
// dispaly product and stock , stock in descending order
// product having maximum available stock
// is ther is any product can be purchased by Rs 10
// print all product in the rage of 10 to 30


// 1. display all product name
console.log("");
console.log("Product Name");
console.log("------------");
products.forEach(a => console.log(a[1]));


// 2. dispaly product and price whose price<50
console.log("");
console.log("Product Name - Product Price");
console.log("-----------------------------");
products.filter(a => a[2]<50).forEach(b => console.log(b[1],b[2]))


// 3. print price of oreo
console.log("");
// products.filter(a => a[1]=='oreo').forEach(b => console.log(`${b[1]} - ${b[2]}`))
console.log(`Price of oreo: ${products.find(a=> a[1]=="oreo")[2]}`);


// 4. print costly product name
console.log("");
console.log("Costly product name:",products.reduce((h,a) => h>a[2]?h:a)[1]);

// 5. display out of stock product
console.log("");
console.log(`Out of stock product: ${products.find(a=>a[3]==0)[1]}`);


// 6. dispaly product and stock , stock in descending order
console.log("");
console.log("Product and Stock");
console.log("-----------------");
products.sort((a,b) => b[3]-a[3]).forEach(c => console.log(c[1],c[3]))

// 7. product having maximum available stock
console.log("");
console.log("Max stock product name:",products.reduce((h,a) => h[3]>a[3]?h:a,0)[1]);

// 8. is there is any product can be purchased by Rs 10
console.log("");
console.log(products.some(c => c[2]<=10)?`Yes Product can Purchased By 10`:`No Prdouct can Purchased By 10`);



// 9. print all product in the range of 10 to 30
console.log("");
console.log("Product in the range of 10 to 30");
products.filter(c => c[2]>=10&&c[2]<=30).forEach(c=>console.log(c[1]))