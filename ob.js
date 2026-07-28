// creating Object

let products = {
    pid: 1,
    pname: "lays",
    price: 20,
    stock: 80
}

// console.log(products);

// // object acces by dot operator
// console.log(products.pname);

// // object acces by square bracket
// console.log(products["price"]);


// // seach the key is in object
// console.log("offers" in products);

// search a key not find insert the key and value
// products.hasOwnProperty("discount")?products
// ["discount"]:products["discount"]=20%


// remove the key value
// delete products.stock
// console.log(products);



let cars={
    name:"Boleno",
    model:"hatch-back",
    manufacture:"maruti suzuki",
    price:"13 L"
}

// display car name and its manufacture

// console.log(`Car Name: ${cars.name} -  manufacture: ${cars.manufacture}`);


// // check model key is present then display its value

// // console.log("model" in cars?`Model: ${cars.model}`:`No Key Present`);
// cars.hasOwnProperty("model")&&console.log(cars["model"]);



// // add varient as "automatic" and "manual"

// cars["varient"]=["automatic","manual"]
// console.log(cars);

// // add colors as red , blue , white , ash and black

// cars["colors"]=["red","blue","white","ash","black"]
// console.log(cars);


// // add hybrid varient

// cars.varient.push("hybrid")
// console.log(cars);

// // print all key values in object
// console.log(Object.values(cars));

// // print all keys in object
// console.log(Object.keys(cars));

//     let ob1 ={
//         a:1
//     }

//     let ob2 ={
//         b:2
//     }

//     // combining objects and give in an new array
//     console.log(Object.assign({},ob1,ob2));
    
    let data = "hi all hello hi welcome to js" 

    let output = {}
    data.split(" ").forEach(word => output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
   console.log(output);
   
  
   

    
    
    