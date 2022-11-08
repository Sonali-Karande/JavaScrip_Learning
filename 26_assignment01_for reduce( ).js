const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("*******1. Find the sum of all numbers***********************************");
const sum=array_numbers.reduce((runningTotal,value)=>{
return runningTotal+value;
});
console.log(`Sum of Array is:${sum}`);
console.log("*******2. Find the sum of all even numbers**********************************");
const evenNo=array_numbers.filter((value)=>{
return (value%2==0);
});
console.log(`Sum of Even no from Array is:${evenNo}`);
const evenAdd=evenNo.reduce((runningTotal,value)=>{
    return runningTotal+value

});
console.log(`Even no Addition is:${evenAdd}`);











