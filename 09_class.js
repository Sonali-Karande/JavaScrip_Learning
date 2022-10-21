// let sachinPerson={
//     fullName:"Sachin Tendulkar",
//     city:"Mumbai",
//     age:42,
//     isMarried:true
// }
// let sonaliPerson={
//     fullName:"Sonali Karande",
//     city:"Pune",
//     age:42,
//     isMarried:true
// }
// let mohitPerson={
//     fullName:"Mohit Sharma",
//     city:"Mumbai",
//     age:42,
//     isMarried:true
// }
// class Person{
//     fullName
//     city
//     age
//     gender
    
//     constructor(fullName,city,age,gender)
//     {
//         this.fullName=fullName;
//         this.city=city;
//         this.age=age;
//         this.gender=gender
//         // Person.fullName=myName;
//     }
// }
// let sachin=new Person("Sachin Tendulkar","Pune",45,"Male");
// let Rohit=new Person("Rohit Sharma","Mumbai",35,"Male");
// console.log(sachin);
// console.log(Rohit);
class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`person Details:${this.fullName},${this.city},${this.age},${this.gender}`);
    }
    
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin.details());
console.log(sachin);
console.log(rohit);
console.log(typeof sachin);
class Student{
    constructor(rollNo,schoolName)
    {
        this.rollNo=rollNo;
        this.schoolName=schoolName
    }
}
let s1=new Student(123,"abc");
let s2=new Student(223,"asd");
console.log(s1 instanceof Student);
console.log(sachin instanceof Student);
console.log(s1.rollNo,s1.schoolName);
s1.rollNo=142;
delete s1.rollNo;
console.log(s1);


