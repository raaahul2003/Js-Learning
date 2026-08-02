class Parent{
    showModel(){
        console.log("this is duke");
        
    }
}
class child extends Parent{

}
const ob = new child()
ob.showModel()

let boleno={
    model:'hatch-back',
    manufacturer:"Maruti suzuki",
    price:'13L'
}
let glanza={

    manufacturer:"toyota",
    price:"13L"
}

glanza.__proto__=boleno
console.log(glanza.model);
