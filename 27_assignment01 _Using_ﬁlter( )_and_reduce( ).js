class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;

    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
let array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("*********1. Find all the employees from ‘Wipro’ company***************************************************");

var array1=array_emps.filter((person)=>{
    if (person.emp_company=='Wipro') {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});
console.log("*********2. Find all the employees from ‘IT’ OR ‘HR’ dep***************************************************");

var array1=array_emps.filter((person)=>{
    if (person.emp_dept=="IT"||person.emp_dept=="HR") {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});
console.log("*********3. Find all the employees whose emp id’s are greater than 50***************************************************");

var array1=array_emps.filter((person)=>{
    if (person.emp_id>50) {
        console.log(`Employee ID>50:Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});


console.log("*********4. Find all the employees whose names start with letter ‘A’ or ‘V’ or ‘M’**************************************************");

var array1=array_emps.filter((person)=>{
    if (person.emp_name.startsWith("A")||person.emp_name.startsWith("V")||person.emp_name.startsWith("M")) {
        console.log(`Employee ID>50 are:Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});

console.log("*********5. Find the average salary of the employee for all the department*************************************************");
var array1=array_emps.filter((value)=>{
    return value.emp_dept;

});
//console.log(array1);
var array2=[];
array1.forEach((value1)=>{
    
    array2.push(value1.emp_salary);

});
//console.log(array2);

var array3=array2.reduce((a,b)=>{
    return a+b;

});
let avg=array3/array1.length
console.log(`Average salary of all departments:${avg}`);
console.log("*********6. Find the average salary for ‘IT’ department*************************************************");
var array1=array_emps.filter((value)=>{
    return value.emp_dept==='IT';

});
//console.log(array1);
var array2=[];
array1.forEach((value1)=>{
    
    array2.push(value1.emp_salary);

});
//console.log(array2);

var array3=array2.reduce((a,b)=>{
    return a+b;

});
console.log(`Average salary of 'IT' departments:${array3/array1.length}`);
