// 1. find first reccurssive character from the given pattern pattern="ABEBAAD"

let pattern = "ABEBAAD"

function reccurssiveChar(str){
    let seen = []
    for(let char of str){
        if(seen.includes(char)){
            return char;
        }
        seen.push(char);
        }
        return "No Reccurssive Character"
    }

console.log(`First reccurssive character is: ${reccurssiveChar(pattern)}`);

