// [no,district,+ve cases,death rate, curred rate, 1st dose vaccine,second dose vaccine]
covid_data=[
    [1,"ernkulama",34000,2000,23000,20000,2000],
    [2,"idukki",14000,3000,25000,30000,1000],
    [3,"trissur",24000,4000,33000,24000,2500],
    [4,"pathanamthitta",20000,2000,45000,22000,1500],
    [5,"Kozhikkode",44000,5000,12000,21000,500],
    [6,"palakkad",12000,1000,20000,23000,3400],
    [7,"kottayam",27000,1500,27000,14000,1000],
    [8,"kollam",14000,2500,25000,18000,2700],
]
// district having highest +ve case
// district having highest 1st dose vaccine
// district having lowest death rate
// display district  with +ve cases in descending order
// is district with +ve case>15000
// display district  with 1st dose vaccine in ascending order
// print trissur details
// print total number of +ve cases
// print total  number  of curred cases
// print curred case in idukki

// 1. district having highest +ve case
console.log("");
console.log(`Highest +ve case: ${covid_data.reduce((high,ve) => high[2]>ve[2]?high:ve)[1]}`);

// 2. district having highest 1st dose vaccine
console.log("");
console.log(`Highest 1st dose vaccine: ${covid_data.reduce((high,ve) => high[5]>ve[5]?high:ve)[1]}`);

// 3. district having lowest death rate
console.log("");
console.log(`Lowest Death Rate: ${covid_data.reduce((low,ve) => low[3]<ve[3]?low:ve)[1]}`);

// 4. display district  with +ve cases in descending order
console.log("");
console.log("District  with +ve cases in descending order");
covid_data.sort((a,b) => b[2]- a[2]).forEach(c => console.log(c[1],c[2]));

// 5. is district with +ve case>15000
console.log("");
console.log("District with +ve case>15000");
covid_data.filter(a => a[2]>15000).forEach(b => console.log(b[1],b[2]));

// 6. display district  with 1st dose vaccine in ascending order
console.log("");
console.log("District  with 1st dose vaccine in ascending order");
covid_data.sort((a,b) => a[3]- b[3]).forEach(c => console.log(c[1],c[3]));

// 7. print trissur details
console.log("");
console.log(`Trissur Details: ${covid_data.find(c => c[1]=='trissur')}`);

// 8. print total number of +ve cases
console.log("");
console.log(`Total +ve case: ${covid_data.reduce((sum,ve) => sum+ve[2],0)}`);

// 9. print total  number  of curred cases
console.log("");
console.log(`Total Curred case: ${covid_data.reduce((sum,ve) => sum+ve[4],0)}`);

// 10. print curred case in idukki
console.log("");
covid_data.filter(c => c[1]=='idukki').forEach( d=> console.log(`District: ${d[1]}, Curred Rate: ${d[4]}`));
