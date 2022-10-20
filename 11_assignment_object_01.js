const teacher = {
    fullName: "Pradip Atre",
    address: "Pune",
    age: 45,
    
    mobileNo: 1232123432,
    occupation: "Teacher",
    degree: {
        tenth: "SSC",
        Twelth: "HSC",
        engineering: "CSE",
        phd: "Adv Computing",
        developer: "Angular Developer"
    },
    certificates:{
        certificate1:" Hacker Rank Participation",
        certificate2:" 'IFE course'",
        certificate3:" 'Adv PRogramming'"
    },
    totalDegree:function(){
return`Pradip sir Degrees: ${this.degree.tenth}, ${this.degree.Twelth} ,${this.degree.engineering} ,${this.degree.phd} ,${this.degree.developer} Total degrees are:5`;
    }
}
console.log(`Created  object "teacher" with nested objects "degree" and "certficates" :`);
console.log(teacher);
console.log("************************************************************************");
console.log("Teacher Degrees:");
 console.log(teacher.totalDegree());
 console.log("************************************************************************");
console.log(`Adding new property 'isMarried'" :`);

teacher.isMarried= true;
console.log(teacher);
console.log(Object.keys(teacher));
 console.log(Object.values(teacher));
console.log("************************************************************************");
console.log(`Before updating property 'address' of teacher object:`);
console.log(teacher);
console.log(`After updating existing property 'address' of teacher object'" :`);
teacher.address="Hinjewadi Pune";
console.log(teacher);
console.log("************************************************************************");
console.log(`After deleting 'certificate2' from nested certificates object'" :`);

delete teacher.certificates.certificate2;
console.log(teacher.certificates);
console.log("************************************************************************");
console.log(`After adding certificate from nested certificates object'" :`);
teacher.certificates.certificate4=".net developer course";
console.table(teacher.certificates);




