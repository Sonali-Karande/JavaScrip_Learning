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
let empArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("*******************Employee Information***********************************");
empArray.forEach((employee)=>{
    console.log(`All Employee Information are:Employee ID:${employee.emp_id} Employee Name: ${employee.emp_name} Employee Department:${employee.emp_dept} Employee Salary:${employee.emp_salary} Employee Company:${employee.emp_company}`);

});
console.log("*******************TCS employee details and log only emp name and company name***********************************");
empArray.forEach((employee)=>{
if (employee.emp_company=="TCS") {
    console.log(`Employee Working in TCS are:Employee Name: ${employee.emp_name} Employee Company:${employee.emp_company}`);

}
});
console.log("******************* Employee Salary>70000 or =50000 and log all emp details***********************************");
empArray.forEach((employee)=>{
if (employee.emp_salary>70000||employee.emp_salary==50000) {
    console.log(`All Employee Salary>70000 or = 50000 are:Employee ID:${employee.emp_id} Employee Name: ${employee.emp_name} Employee Department:${employee.emp_dept} Employee Salary:${employee.emp_salary} Employee Company:${employee.emp_company}`);


}
});

console.log("******************* Find the sum of all employees salary and log on console***********************************");
let sum=0;
empArray.forEach((employee)=>{

sum=sum+employee.emp_salary

});
console.log(`The sum of all employees salary is:${sum}`);

console.log("*******************  Find the average salary and log on console***********************************");
let sum1=0;
let avgSal;

empArray.forEach((employee)=>{

sum1=sum1+employee.emp_salary
let len=empArray.length;
avgSal=sum1/len;
});
console.log(`The  average salary is:${avgSal}`);
console.log("*******************Find the ‘IT’ and ‘HR’ department employees whose salary is greater than or equal to 75000 ***********************************");
empArray.forEach((employee)=>{
if (employee.emp_dept=="IT"&&employee.emp_dept=="HR"||employee.emp_salary>=75000 ) {
    console.log(`The IT and HR dept employees whose salary is >=75000 :Employee ID:${employee.emp_id} Employee Name: ${employee.emp_name} Employee Department:${employee.emp_dept} Employee Salary:${employee.emp_salary} Employee Company:${employee.emp_company}`);


}
});









