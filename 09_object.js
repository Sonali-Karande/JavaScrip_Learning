let mohit={
    fullName:"Sachin Tendulkar",
    city:"Mumbai",
    age:42,
    isMarried:true
}
let isAvailable="fullName" in mohit;
console.log(isAvailable);
console.log("city" in mohit);
console.log("****************************************");
console.log(Object.entries(mohit));
console.log(Object.keys(mohit));
console.log(Object.values(mohit));
let person={
    fullName:"Sachin Tendulkar",
    city:"Mumbai",
    age:42,
    isMarried:true,
    address: {
        street:"AS club",
        pin_code:12345,
        city:"PUNE",
        state:"MH"
    },
    eat:function(){
console.log("I am vegetarian");
    },
    walk:function()
    {
        console.log("I do walk everyday");
    },
    details:function() {
        //let personDetails=this.fullName+" "+this.age+" "+this.address.street;
        let personDetails1=`Details Are: ${this.fullName}, ${this.age} ,${person.address.street}`;
        return personDetails1;
        // console.logL(this.fullName,this.age,this.address.city);
    }
}
//var {fullName,city,age,isMarried,address:{street,pin_code,state}}=person;//nested object destructuring
//console.log(street);
let pDetails=person.details();
console.log(pDetails);
console.log(typeof person);
console.table(person.address);
console.log(person.address.street);
person.address.landmark="Near main road";
person.eat();
person.walk();

// let address={
//     stret:"AS club",
//     pin_code:12345,
//     city:"PUNE",
//     state:MH
// }
person.fullName="Sachin Ramesh Tendulkar";
person["fullName"]="Sachin Ramesh Tendulkar"; 
delete person.age;

console.log(person);
console.table(person);
person.pinCode=123456;
console.table(person);
person.profession="Developer";
console.table(person);

let personFname=person.fullName;
console.log(personFname);
console.log(person.fullName);
let city=person.city;
console.log(city);
console.log(person["city"]);

//optional
// let objectSachin1={
//     "fullName":"Sachin Tendulkar",
//     "city":"Mumbai",
//     "age":42,
//     "isMarried":true
// }
let collegeAbc={

}
console.log(collegeAbc);
