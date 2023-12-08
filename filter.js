const data =[
    {id:1, title:"i phone15" ,price: "89999",category:"mobiles"},
    {id:2, title:"poco" ,price: "39999",category:"mobiles"},
    {id:3, title:"realme" ,price: "29999",category:"mobiles"},
    {id:4, title:"xiaome" ,price: "59999",category:"mobiles"},
    {id:5, title:"Asus" ,price: "59999",category:"laptop"},
    {id:6, title:"boat" ,price: "59999",category:"smartwatch"},
    {id:7, title:"apple" ,price: "59999",category:"tabs"},
];

//const result = data.filter((mydata)=>mydata.price >= "40000")
const result2 = data.filter((mydata)=>mydata.category == "mobiles")
console.log(result2)
