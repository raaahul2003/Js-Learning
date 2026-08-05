// 2. Display number count 
//    arr=[10,20,0,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]


arr=[10,20,0,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]

let count = arr.reduce((result,number)=> {
    if(result[number]){
        result[number]=result[number]+1
    }else{
        result[number]=1
    }
    return result;
},{})

console.log(count);



