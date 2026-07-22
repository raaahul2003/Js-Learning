// print the pattern
// input [3,4,6] ,[12,5,2]
// output [10,9,7] ,[7,14,17]
  let inp = [3,4,6]
  let sum = null
  let out = []
    for(let num of inp){
        sum+=num
    }
    for(let num of inp){
        out.push(sum-num)
    }
    console.log(out);
    

