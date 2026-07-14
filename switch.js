const prompt = require('prompt-sync')({sigint:true})

let day = prompt("Enter a Day :")
// console.log(day);


switch(day){

    case 'monday':  console.log(day,"is a weekday");
    break
    case 'tuesday':  console.log(day,"is a weekday");
    break
    case 'wednesday':  console.log(day,"is a weekday");
    break
    case 'thursday':  console.log(day,"is a weekday");
    break
    case 'friday':  console.log(day,"is a weekday");
    break
    case 'saturday':  console.log(day,"is a Holiday");
    break
    case 'sunday':  console.log(day,"is a Holiday");
    break
    default : console.log("Enter a valid day");
    
}