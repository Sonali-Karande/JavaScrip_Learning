
let arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log(`Original Array:${arrayOfNames}`);
console.log("******************************************************************");

let removeDuplicateName=[...new Set(arrayOfNames)];
console.log(`After Removing Duplicate Element:${removeDuplicateName}`);
console.log("******************************************************************");

let oLen=arrayOfNames.length;
let rdLen=removeDuplicateName.length;
let totalCountOfDuplicateElements=oLen-rdLen;
console.log(`Total No of duplicate element removed in an Array:${totalCountOfDuplicateElements}`);
console.log("******************************************************************");

console.log(`Total No of Unique element in an Array:${removeDuplicateName.length}`);
