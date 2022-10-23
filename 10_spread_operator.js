let person={
    name:"sonali",
    age:32,
    city:"pune",
    address:{
        pin:12321,
        street:"kanch pokali"
    }
}
console.log(person.name,person.age,person.city);
console.log(person);
//let student={...person};
let student=JSON.parse(JSON.stringify(person));

student.city="mumbai";
console.log(student.city,person.city);
person.age=33;
console.log(student.age,person.age);
student.address.street="khau galli";
console.log(student.address.street);
console.log(person.address.street);




console.table(person);
console.table(student);

//console.log(...person);  