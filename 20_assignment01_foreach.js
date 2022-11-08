console.log("*****************Using forEach() with arrow function and callback ******************************8");
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
let s="";
let s1="";
array_numbers.forEach((value,index)=>{
s=s+" "+value;
s1=s1+" "+index;
});
console.log("Print array no.s with index:");
console.log(`Array value:${s} \nIndex value:${s1}`);
console.log("*******************************************************");
console.log("Log positve no.s:");
s2=" ";
array_numbers.forEach((value)=>{
if (value>0) {
    s2=s2+value+" ";
}
});
console.log(`Positive no.s are:${s2}`);
console.log("*******************************************************");

console.log("Log Negative no.s:");
let s3=" ";
array_numbers.forEach((value)=>{
if (value<0) {
    s3=s3+value+" ";
}
});
console.log(`Negative no.s are:${s3}`);
console.log("*******************************************************");

console.log("Find the no.s:");
s4=" ";
array_numbers.forEach((value)=>{
if (value%2==0) {
    s4=s4+value+" ";
}
});
console.log(`Even no.s are:${s4}`);
console.log("*******************************************************");

console.log("Find the sum of all no.s:");
let s5=0;
array_numbers.forEach((value)=>{
    s5=s5+value;
});
console.log(`Sum of all no.s:${s5}`);
console.log("*******************************************************");

console.log("Log only Even positioned array value :");
let s6="";
let s7="";
array_numbers.forEach((value,index)=>{
    if (index%2==0) {
      
        s6=s6+" "+value;
        s7=s7+" "+index;
        }
    }
    );
console.log(`Even positioned array value:${s6}\nEven positioned index is:${s7}`);
console.log("*******************************************************");

console.log("Log only Odd positioned array value if it is negative :");
let s8="";
let s9="";
array_numbers.forEach((value,index)=>{
    if (index%2!=0&&value<0) {
      
        s8=s8+" "+value;
        s9=s9+" "+index;
        }
    }
    );
console.log(`Odd positioned Negative array value:${s8}\nOdd positioned index is:${s9}`);









