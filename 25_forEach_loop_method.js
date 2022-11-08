let show=(n1,test)=>{
    console.log("Hi");
}
show(10,"test");
const arrayNumbers=[10,-20,30,40,20,10,-30];
// arrayNumbers.forEach(function(currentValue,index,array){
//     console.log(currentValue,index,array);
// });
arrayNumbers.forEach((currentValue,index)=>{

    console.log(currentValue,index);
});

// arrayNumbers.forEach((currentValue)=>console.log(currentValue));
console.log("======================================================");
arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0&&currentValue>0) {
    console.log(currentValue,index);
        
    }
});
console.log("======================================================");
arrayNumbers.forEach((currentValue,index)=>{
    if (currentValue<0) {
    console.log(currentValue,index);
        
    }
});
console.log("=============================Traversing set  using forEach()=========================");

const setOfNumbers=new Set(arrayNumbers);
arrayNumbers.forEach((value)=>{
console.log(value);});

console.log("=============================Traversing Map  using forEach()=========================");
let map=new Map();
map.set(22,"Sonali");
map.set(11,"Kavya");
map.set(33,"Sawti");
map.set(77,"Nandini");
map.forEach((key,value)=>{
console.log(key,value);
});

console.log("=============================Traversing array of objects using forEach()=========================");

class Person{
    constructor(fullName,city,age,gender)
    {
        this.fullName=fullName;
        this.city=city;
        this.age=age;
        this.gender=gender;
    }
    details(){
        console.log(`Person Deatails:${this.fullName} ${this.city} ${this.age} ${this.gender} `);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

const array = [ personAnil, personAnita, personBill];
array.forEach((person)=>{
console.log(person.fullName);
console.log(person.details());
});












