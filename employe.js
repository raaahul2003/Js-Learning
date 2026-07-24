employee=[
    [1000,"Akhil","Analyst","Kochi",15000,3],
    [1001,"Neel","Developer","Kochi",16000,2],
    [1002,"Max","Tester","Kochi",25000,3],
    [1003,"MaxWell","QA","Kochi",50000,3],
    [1004,"Vyom","QA","Kochi",45000,3],
    [1005,"Laisha","Developer","Kochi",35000,3],
    [1006,"Ahan","Tester","Kochi",20000,3],
    [1007,"Nishan","QA","Kochi",50000,3],
    [1008,"Shyam","Developer","Kochi",35000,3],
]

// 1. Print all employee names
// 2. Print total number of employee
// 3. print devloper employee names
// 4. print details of employee laisha
// 5. display employee name and salary 
// 6. display employee name and salary in descending order of salary
// 7. display employee name and experience in ascending order of experience
// 8. employee with minimum salary 
// 9. employee with maximum salary
// 10. total sum of employee salary



console.log("----------------------------------------");

console.log("----Employee Names----");

// for(let emp of employee){
//         console.log(emp[1]);
// }
employee.forEach(emp => { console.log(emp[1]); });

console.log("----------------------------------------");


    console.log(`Total Number Of Employees: ${employee.length}`);

 console.log("--------------------Name Of Devloper--------------------");

    // for(let emp of employee){
    //     if(emp[2]=="Developer"){
    //         console.log(`Developer ${emp[1]}`);
    //     }
    // }

    employee.filter((emp)=>emp[2]=="Developer").forEach((emp)=>console.log(emp[1]))
    

console.log("----------------------------------------");

    // for(let emp of employee){
    //     if(emp[1]=="Laisha"){
    //         console.log(`${emp}`);
    //     }
    // }

    console.log(employee.find(emp => emp[1]=="Laisha"));
    

console.log("----------------------------------------");

    employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
    console.log(`Name - Salary`);
    console.log("--------------");

    for(let emp of employee){
        console.log(`${emp[1]} - ${emp[4]}`);
    
    }

console.log("----------------------------------------");
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(`Name - Experience`);
console.log("--------------");
for(let emp of employee){
    console.log(`${emp[1]} - ${emp[5]}`);
 
}
console.log("----------------------------------------");



