class Bank{
    bankName
    location
    accountNo
    ifsc
    interestRate
constructor(bankName,location,accountNo,ifsc,interestRate)
{
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.interestRate=interestRate;
}
}
let axisBank=new Bank("Axis Bank","Pune",2135,"SBI356665","10%");
let kotakBank=new Bank("Kotak Bank","Solapur",4567,"KOT566678","9%");
let sbiBank=new Bank("SBI Bank","Mumbai",1235,"SBI457778","11%");
let iciciBank=new Bank("ICICI Bank","Kolahapur",6676,"ICI345437","8%");
let hdfcBank=new Bank("HDFC Bank","Sangola",7898,"HD567890","7%");
let punjabBank=new Bank("Punjab Bank","Nashik",6765,"PUN1232134","12%");
let array=[axisBank,kotakBank,sbiBank,iciciBank,hdfcBank,punjabBank];
console.log("*********************************Loging only Bank name and Location********************************************");
for (let index = 0; index < array.length; index++) {
    let element=array[index];
    console.log(`Bank Name:${element.bankName}   Location:${element.location}`);
    
}
console.log("*********************************Kotak Bank Details using for of loop********************************************");

for (const bank of array) {
    
    if (bank.bankName=="Kotak Bank") {
        console.log(`Bank Name:${bank.bankName} \nLocation:${bank.location} \nAccount No:${bank.accountNo} \nIfiscCode:${bank.ifsc} \nInterest Rate:${bank.interestRate}`);
    }
}
console.log("*********************************Logging Details using for loop********************************************");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Bank Name:${element.bankName}   Location:${element.location}   Account No:${element.accountNo}   IfiscCode:${element.ifsc}   Interest Rate:${element.interestRate}`);

    
}