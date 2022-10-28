const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Original array:${array_numbers}`);
console.log(`Total length of array is:${array_numbers.length}`);
console.log(`First Element Of array is:${array_numbers[0]}\nLast Element Of array is:${array_numbers[array_numbers.length-1]}`);
let lastThird=array_numbers[array_numbers.length-3];
console.log(`Third last element of array is:${lastThird}`);
console.log("*****************************************************************");
console.log("All even numbers from Array:");
let s2="";
for (let index = 0; index < array_numbers.length; index++) {
 if(array_numbers[index]%2==0)
 {
    s2=s2+array_numbers[index]+" ";
 }
    
}
console.log(s2);
console.log("*****************************************************************");

console.log("All Odd numbers from an Array:");
let s3="";
for (let index = 0; index < array_numbers.length; index++) {
 if(array_numbers[index]%2!=0)
 {
    s3=s3+array_numbers[index]+" ";
 }
    
}
console.log(s3);
console.log("*****************************************************************");

console.log("Even Positioned elements from an array is:");
let s4="";
for (let index = 0; index < array_numbers.length; index++) {
    if (index%2==0) {
        s4=s4+array_numbers[index]+" ";
    }
    
    
}


console.log(s4);
console.log("*****************************************************************");

console.log("Odd Positioned elements from an array is:");
let s5="";
for (let index = 0; index < array_numbers.length; index++) {
    if (index%2!=0) {
        s5=s5+array_numbers[index]+" ";
    }
    
    
}

console.log(s5);
console.log("*****************************************************************");


console.log("Sum of all elements from an array :");

let sum=0;
let result
for (let index = 0; index < array_numbers.length; index++) {
   sum=sum+array_numbers[index];
    }
console.log(`Sum of all elements from an array is:${sum}`);
console.log("*****************************************************************");

console.log("Find the numbers which are multiple of 5 from an array :");
let s6="";
for (let index = 0; index < array_numbers.length; index++) {
if(array_numbers[index]%5==0)
 {
s6=s6+array_numbers[index]+" ";
}
    
}
console.log(`The numbers which are multiple of 5:${s6}`);
console.log("*****************************************************************");

console.log("Is number available in an array_numbers: ");
console.log(`Is number 115 available in array_numbers:${array_numbers.includes(115)}`);
console.log(`Is number 23 available in array_numbers:${array_numbers.includes(23)}`);












