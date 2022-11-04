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
console.log("**************************All employee working on TCS and log only employee names and company name*********************************");
let empArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
for (const emp of empArray) {
    if (emp.emp_company==="TCS") {
        console.log(`Employee Working in TCS are:Employee Name: ${emp.emp_name} Employee Company:${emp.emp_company}`);
    }
}
console.log("**************************Find All Finance department employee and log only employee names and department name*********************************");

for (const emp of empArray) {
    if (emp.emp_dept==="Finance") {
        console.log(`Employee Working in Finance department are:Employee Name: ${emp.emp_name} Employee Department:${emp.emp_dept}`);
    }
}
console.log("**************************Find All  employee Name starts with R log all employee details*********************************");

for (const emp of empArray) {
    
    if ( emp.emp_name.startsWith("R")) {
        console.log(`All Employee Name starts with R are:Employee ID:${emp.emp_id} Employee Name: ${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
    }
}
console.log("**************************Find All  employee salary grater than 70000  log only employee names and company name salary*********************************");
for (const emp of empArray) {
    if (emp.emp_salary>70000) {
        console.log(`Employee salary grater than 70000 : ${emp.emp_name} Employee Company:${emp.emp_company} Employee Salary:${emp.emp_salary}`);
    }
}
console.log("**************************Find All  employee salary grater than and equal to 50000 and from IT deparment  log all employee details*********************************");


for (const emp of empArray) {
    
    if (emp.emp_salary>=50000&&emp.emp_dept=="IT") {

        console.log(`All Employee salary>=50000 and department is IT are:Employee ID:${emp.emp_id} Employee Name: ${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
    }
}
console.log("**************************Find All  employee company Infy and  log all employee details*********************************");

for (const emp of empArray) {
    
    if (emp.emp_company=="Infy") {

        console.log(`All Employee Company Infy are:Employee ID:${emp.emp_id} Employee Name: ${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
    }
}











