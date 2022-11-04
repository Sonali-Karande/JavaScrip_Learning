'use strict'
let person={
    fullName:"Sonali Karande",
    age:32,
    city:"pune",
    pin:121212,
    state:"MH",
    isMarried:true
}
// let fullName=person.fullName;
// let city=person.city;
// let pin=person.pin;
// let state=person.state;
// let isMarried=person.isMarried;
let {fullName,city,pin,state,isMarried}=person;
console.log(fullName,city,pin,state,isMarried);
let arraytOfNames=["Sonali","Swati","Kavya","Nandini","Riya","Siya"];
// let ele1=arraytOfNames[0];
// let ele2=arraytOfNames[1];
// let ele3=arraytOfNames[2];
// let ele4=arraytOfNames[3];
// let ele5=arraytOfNames[4];
// let ele6=arraytOfNames[5];
let [ele1,ele2,ele3,ele4,ele5,ele6]=arraytOfNames;
console.log(ele1,ele2,ele3,ele4,ele5,ele6);
console.log(ele1,ele2,ele3,ele4,ele5,ele6="hjk");//destructuring with default values

