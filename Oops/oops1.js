class students{

    constructor(name,m1,m2,m3){
        this.name=name
        this.mark1=m1
        this.mark2=m2
        this.mark3=m3
    }
    calavgMark(){
        let total = this.mark1 + this.mark2 + this.mark3
        let avg = total/3
        console.log("=============");
        console.log(`Name: ${this.name}
                     Total Mark:${total}
                     Average Mark:${avg} `);
        console.log("=============");

        
    }
}
const std1 =new students("anu",67,89,90)
const std2 =new students("rannu",64,79,60)
const std3 =new students("rinu",71,84,80)

std1.calavgMark()
std2.calavgMark()
std3.calavgMark()