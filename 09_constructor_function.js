function Person(fullName, city, age, gender) {
    this.fullName=fullName;
    this.city=city;
    this.age=age;
    this.gender=gender;
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
console.log(sachin);
let sharma = new Person("Rohit sharma", "Pune", 35, "Male");
console.log(sharma);
let riya=new Person("Riya","katraj",22,"Female");
let shrisha=new Person("Shrisha","katraj",22,"Female");
Person.prototype.country="india";
console.log(riya.country);
console.log(shrisha.country);