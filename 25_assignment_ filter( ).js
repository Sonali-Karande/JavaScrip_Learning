const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("*********1. Find out all the numbers which are greater than 50 and log on console*******************************************");
const newArray=array_numbers.filter((value)=>{
    return value>50;
});
console.log(`Numbers >50:${newArray}`);
console.log("******************2. Find out all the even number and log on console********************************************************************");
const newArray1=array_numbers.filter((value)=>{
    return (value%2==0);
});
console.log(`Even Numbers:${newArray1}`);

console.log("******************3. Find out all the odd numbers and log on console********************************************************************");
const newArray2=array_numbers.filter((value)=>{
    return (value%2!=0);
});
console.log(`Odd Numbers:${newArray2}`);

console.log("******************4. Find out all the numbers which are multiple of 5*******************************************************************");
const newArray3=array_numbers.filter((value)=>{
    return (value%5==0)
});
console.log(`Multiple of 5:${newArray3}`);
console.log("******************5. Find out all numbers which are between 20 and 50*******************************************************************");
const newArray4=array_numbers.filter((value)=>{
    return (value>20&&value<50);
});
console.log(`All numbers which are between 20 and 50:${newArray4}`);





