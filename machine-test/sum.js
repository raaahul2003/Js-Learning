const prompt = require("prompt-sync")({sigint :true})

let sum = null

for(let i=1; i<=100; i++){
    if(i%2==0){ 
        sum+=i;
        console.log(i);
        
    }
    
}
console.log(`Sum of all Even Numbers: ${sum}`);