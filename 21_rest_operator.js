'use strict'
// //myName="Mohit";//no allowed
// //console.log(myName);
// let age=31;
// //delete age;
// person={
//     name:"sachin",
//     age:34
// }
function display(name,...myName){
console.log(name,myName);
console.log(typeof myName);
}
display("sonali",32,"city",true);
//happy path
function divide(x,y=1) {
    console.log(x/y);
}
divide(10);