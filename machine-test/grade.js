const prompt = require("prompt-sync")({sigint :true})

let score = prompt("Enter the score: ")
    
    if(score>=90){
        console.log(`Score: ${score}  Your Grade is A`);
        
    }
    else if(score>=80){
        console.log(`Score: ${score}  Your Grade is B`);
        
    }
    else if(score>=70){
        console.log(`Score: ${score}  Your Grade is C`);
        
    }
    else if(score>=60){
        console.log(`Score: ${score}  Your Grade is D`);
    
    }else if(score>=0){
        console.log(`Score: ${score}  Your Grade is F`);
        
    }