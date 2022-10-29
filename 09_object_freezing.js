const person={
    name:"sonali",
    rollNo:123
}
Object.freeze(person);
const student={
    name:"Mohit",
    rollNo:121
}
const address = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone=Object.assign({},student);// Deep cloning will be performed
studentClone.name="Mohit  Sharma";
console.log(studentClone);
console.log(student);

let mergeObject=Object.assign({},student,address);
console.log(mergeObject);
person.name="Sonali Karande";//modification is not consider as person object is freeze
person.street="AS club";// Adding new property is not considered as person object is freezed
console.log(person);

const arrayNumbers=[2,4,5,6];
Object.freeze(arrayNumbers); // Immutable: We can not change the array values after creation or defining
//arrayNumbers.push(11);//not allowed
console.log(arrayNumbers);


