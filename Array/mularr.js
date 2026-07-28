let arr = [[4,[3]],[4,5,6],[3]]
console.log(arr.flat(Infinity));


let names=["manu","veena","jain"]
// check is it there true or false
console.log(names.includes("manu"));

// check the index value
console.log(names.indexOf("manu"));

// add elements
names.splice(2,0,"Rannan","Rinsha")
console.log(names);

// replace elements
names.splice(1,1,"Raswa")
console.log(names);

// remove elements
names.splice(4,1)
console.log(names);

console.log(names.join("-"));









