products = [
    { pid: 100, pName: 'Apple', band: '5g', price: 120000,
      display: 'led' },

    { pid: 101, pName: 'Samsung', band: '5g', price: 45000,
      display: 'led' },

    { pid: 102, pName: 'Blueberry', band: '4g', price: 50000,
      display: 'led' },

    { pid: 103, pName: 'Nokia', band: '3g', price: 1200,
      display: 'lcd' },

    { pid: 104, pName: 'Motorola', band: '4g', price: 10000,
      display: 'lcd' },
]

// 1.print product name only
    console.log("");
    console.log("Product Name: ");
    products.forEach(a => console.log(`${a.pName}`));
    

// 2.print all mobile details whose display is lcd

console.log(" ");
console.log("Mobile details whose display is lcd:");
products.filter(a => a.display=="lcd").forEach(a => console.log(a.pName))

// 3.print 5g mobile phone name

console.log(" ");
console.log("5g mobile phone name:");
products.filter(a => a.band=="5g").forEach(a => console.log(a.pName))

// 4.display mobiles based on price
console.log(" ");
console.log("mobiles based on price");
products.sort((a,b)=> a.price-b.price).forEach(a=>console.log(a.pName,a.price)
)


// 5.print costly mobile
console.log(" ");
console.log(`Costly mobile: ${products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pName}`);




// 6.print low cost mobile
console.log(" ");
console.log(`Low Cost mobile: ${products.reduce((p1,p2)=>p1.price<p2.price?p1:p2).pName}`);