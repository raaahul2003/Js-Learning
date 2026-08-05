const prompt = require("prompt-sync") ({sigint:true})
let unit = Number(prompt("Enter the Unit: "))


function calculateBill(unit){

    let bill=0

    if(unit<=100){
        bill= unit * 5
    }else if(unit<=200){
        bill = 100 * 5 + ((unit - 100) * 7)
    }else{
        bill = 100 * 5 + 100 * 7 + ((unit - 200) * 10)
    }
    return bill
}

console.log(`Your Electricity Bill is: ${calculateBill(unit)}`);
