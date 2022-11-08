const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
console.log("******1. Reverse the array************************************************");
console.log(`Original array:${array_roll_numbers}`);
array_roll_numbers.reverse();
console.log(`Reverse of array:${array_roll_numbers}`);
console.log("******2. Use the sort() method as it is without any custom sorting logic (Without passing any arguments) & notice the issu************************************************");
array_roll_numbers.sort();
console.log(`Array sort:${array_roll_numbers}`);
console.log(`while sorting an array of numbers when elements has more than two digits in that case sort( ) only considers ﬁrst digit and hence the output is not as expected.`);
console.log("******3. Sort the array in ascending order************************************************");
array_roll_numbers.sort((a,b)=>{return a>b?1:-1

});
console.log(`Array sort in ascending order:${array_roll_numbers}`);
console.log("*****4. Sort the array in descending order without using reverse() method only use sort()************************************************");
array_roll_numbers.sort((a,b)=>{return a>b?-1:1
});
console.log(`Array sort in descending order:${array_roll_numbers}`);
console.log("*****5. Sort the array in descending order with using reverse() method [ Hint → sort array ﬁrst using sort()]************************************************");
array_roll_numbers.sort((a,b)=>{return a>b?1:-1

});
console.log(`Using sort:${array_roll_numbers}`);
array_roll_numbers.reverse();
console.log(`Sort the array in descending order with using reverse():${array_roll_numbers}`);
console.log("*****6. Find the Greatest number from the array]************************************************");
const max = array_roll_numbers. reduce((a, b) => Math. max(a, b), -Infinity);
console.log(`Greatest number from the array: ${max}`);
console.log("*****7. Find the smallest number from the array************************************************");
const min = array_roll_numbers. reduce((a, b) => Math. min(a, b));
console.log(`Smallest number from the array: ${min}`);
console.log("*****8. Remove duplicates from array************************************************");
let arrayUniqueElements=[...new Set(array_roll_numbers)];


console.log(`Array after removing Duplicate elements:${arrayUniqueElements}`);









