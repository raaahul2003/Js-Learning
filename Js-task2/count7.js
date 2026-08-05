// 7. Convert [apple,orange,apple,banana,orange] to {apple:2,orange:2,banana:2 } using reduce

let fruits = ["apple","orange","apple","banana","orange"]
let count =  fruits.reduce((a,b)=>{
    if(a[b]){
        a[b]=a[b]+1
    }else{
        a[b] = 1
    }
    return a
},[])

console.log(count);
