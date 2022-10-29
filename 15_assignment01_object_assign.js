const bank_sbi={
    bankName:"SBI",
    managerName:"A.A.Sharma",
    contact_no:9123452123,
    bankTime:"09.00 AM to 05.00 PM"
}
const bank_location={
    street:"LBS Road",
    city:"pune",
    pinCode:123212

}
console.log("*********************************Cloning Using Object.assign()********************************************");
let bank_sbi1=Object.assign({},bank_sbi,bank_location);
console.log(`Bank SBI Details:\nBank Name:${bank_sbi1.bankName} \nManager Name:${bank_sbi1.managerName} \nContact No:${bank_sbi1.contact_no} \nBank Time:${bank_sbi1.bankTime}`);
//let bank_location1=Object.assign({},bank_location);
console.log(`Bank Location Details:\nBank Street:${bank_sbi1.street} \nBank City:${bank_sbi1.city} \nBank Pincode:${bank_sbi1.pinCode}`);
console.log("*********************************Cloning Using Spread Operator********************************************");
let bank_sbi11={...bank_sbi};
let bank_location11={...bank_location};
console.log(`Bank SBI Details:\nBank Name:${bank_sbi11.bankName} \nManager Name:${bank_sbi11.managerName} \nContact No:${bank_sbi11.contact_no} \nBank Time:${bank_sbi11.bankTime}`);
console.log(`Bank Location Details:\nBank Street:${bank_location11.street} \nBank City:${bank_location11.city} \nBank Pincode:${bank_location11.pinCode}`);
//console.log("*********************************Create object Using literals********************************************");
const rate_of_interest={
    home_lone_interest:"10%",
    personal_loan_interest:"8%",
    due_interest:"4%"
}
//console.log(`Rate of Interest:\nHome Loan Interest:${rate_of_interest.home_lone_interest}\nPersonal Loan interest:${rate_of_interest.personal_loan_interest}\nDue Interest:${rate_of_interest.due_interest}`);
console.log("*********************************Merge the bank_sbi,bank_location1,rate_of_interest objects into new object sbi_details********************************************");
let sbi_details={...bank_sbi,...bank_location,...rate_of_interest};
console.table(sbi_details);
console.log("*********************************Traverse sbi_details merge object********************************************");
for (const key in sbi_details) {
    console.log(`${key}: ${sbi_details[key]}`);
 
    
}













