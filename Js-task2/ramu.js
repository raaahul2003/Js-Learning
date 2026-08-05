// 5. Ramu's Card Stack Game!

//       Ramu is playing a card game where he places cards on top of a pile and 
//       sometimes removes the top card.
//       You are given a list of moves:
//         • "place ‹card›" means Ramu places a card (like "Ace", "King", "Queen") on 
//            top of the pile.
//         • "remove" means Ramu removes the top card from the pile.
//         • If the pile is empty and a "remove" move happens, ignore it.
//       Your task:
//         After all moves, return the name of the card currently on top of the pile.
//         If the pile is empty, return "No cards left".
//            Examples:
//              moves1 = ["place Ace", "place King", "remove", "place Queen"]
//              Pile flow: ["Ace"] -> ["Ace", "King"] -> remove top ("King") -> ["Ace","Queen"]
//              Output: "Queen"
            
//              moves2 = ["remove","place Jack", "remove", "remove"]
//              Pile flow: [] -> ["Jack"] -> remove top ("Jack") -> remove ignored (empty)
//              Output:"No cards left"

function cardGame(moves){
    let top=[]

    for(let move of moves){
        if(move.startsWith("place")){
            let card = move.substring(6);
            top.push(card)
        }else if(move === "remove"){
            if(top.length>0){
                top.pop();
            }
        }
    }
    if(top == 0){
        return "No Cards"
    }else{
        return top[top.length-1]
    }
}

let moves1 = ["place Ace", "place King", "remove", "place Queen",]
console.log(cardGame(moves1));
let moves2 = ["remove","place Jack", "remove", "remove"]
console.log(cardGame(moves2));