// 4. Raju's Instagram Giveaway! Win an iPhone!
//      Raju is hosting a giveaway on the instagram to give awaya brand nw iPhone!
//      To select the winner, he needs help identifying the first unique commenter
//      on his giveaway post - the first user who commented only once without repeating.
//      The challenge: 
// 	Given a list of Instagram usernames representing the order of comments,
//         write a function that returns the username of the first commenter who didn't
//         comment again. If every user commented multiple times, the function should
//         return "No unique commenter".
//         Examples:
//         comments1 = ['nisha', "arjun', 'nisha', 'vicky', 'arjun', 'meera']
//         Output: "vicky"
//         comments2 = ['alex', "alex','sam', 'sam' ]
//         Output: "No unique commenter"


function uniqueCommentor(comment){
    let count = comment.reduce((result,user)=>{
        if(result[user]){
            result[user]=result[user]+=1
        }else{
            result[user]=1
        }
        return result
    },{})

    for(let user of comment){
        if(count[user] === 1){
            return user
        }
    }

    return "No Unique Commenter";

}

let comments1 = ["nisha", "arjun", "nisha", "vicky", "arjun", "meera"];
console.log(uniqueCommentor(comments1));


let comments2 = ["alex", "alex", "sam", "sam"];
console.log(uniqueCommentor(comments2));
