console.log("*********************************************Q=1*************************************************");

const array_nums=[20,3,4,56,400,49];
console.log(`Original Array is:${array_nums}`);
console.log(`After performing shallow copy`);
const array_nums2=array_nums;
array_nums2.push(55);
array_nums2.push(66);
console.log(`Original Array is:${array_nums}`);
console.log(`Cloned Array is:${array_nums2}`);
console.log("*********************************************Q=2*************************************************");
console.log(`Performing Deep clone using operator`);
const array_nums3=[...array_nums];
array_nums.push(10);
array_nums.push(25);
console.log(`Original Array is:${array_nums}`);
console.log(`Deep Cloned Array is:${array_nums3}`);
console.log("*********************************************Q=3*************************************************");
const array_even=[2,30,14,8];
const array3=[...array_even,...array_nums3];
console.log(` Array Even is:${array_even}`);

console.log(`Merge or concat array_even[] with array_nums[]`);
console.log(`After merge array_even[] :${array3}`);

console.log("*********************************************Q=4-5*************************************************");
const employee_info={
    emp_id:27,
    emp_name:"Jhon Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Kanch Pokali 431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"

    },
    mobiles:["+91 8600 3456 88","1800-4557 32","+91-9096 5678 77"]
}
console.table(employee_info.address);
console.table(employee_info.mobiles);
console.log("*********************************************Q=6*************************************************");
console.log(`A)Perform deep cloned using ...operator`);
const employee_info1={...employee_info};
//let student={...person};

console.log(employee_info1.address.locality.street="CHINCH POKALI 431202");
console.table(employee_info1.address.locality);
console.log(`Updates mobiles first value  with your mobile no`);
employee_info1.mobiles="+91 9823 5632 79";
console.log(employee_info1);
console.log(`Original employee_info`);
console.log(employee_info);
console.log(`Cloned employee_info1`);
console.log(employee_info1);
console.log("*********************************************Q=7*************************************************");
console.log(`Deep clone using JSON.stringfy()`);
let employee_info11=JSON.parse(JSON.stringify(employee_info));
employee_info11.salary.july_month="80K";
employee_info11.country="United Kingdom";
console.table(employee_info);
console.table(employee_info11);
