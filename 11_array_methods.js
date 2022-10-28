let arrayOfNumbers=[1,3,7,8,9,3,7];
arrayOfNumbers[4]=11;
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
console.log(arrayOfNumbers.indexOf(11));
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
console.log("*********************************************************");
for (const index in arrayOfNumbers) {
        const element = arrayOfNumbers[index];
        console.log(element);
}
console.log("*********************************************************");

let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
console.log("*********************************************************");

let arrayOfNumbers1=[1,3,7,8,9,3,7];
console.log(arrayOfNumbers1);
arrayOfNumbers1.unshift(5);
arrayOfNumbers1.unshift(0,9,6);
console.log(arrayOfNumbers1);
console.log("*********************************************************");
let array=[11,22,47,81];
console.log(array);

array.shift();
console.log(array);
console.log("*************************slice()********************************");
let arrayNumbers=[1,3,7,8,9,3,7];
console.log(arrayNumbers);

let sliceEle=arrayNumbers.slice(2);
console.log(sliceEle);
let slice=arrayNumbers.slice(1,4)
console.log(slice);

console.log("*************************splice()********************************");
let array_numbers=[1,3,7,8,9,3,7];
console.log(array_numbers);
//let splicedElement=array_numbers.splice(5);
// let splicedElement=array_numbers.splice(2,3);
//to insert element
// let splicedElement1=array_numbers.splice(2,0,22);
// let splicedElement12=array_numbers.splice(2,0,22);
// let splicedElement11=array_numbers.splice(4,0,22);//0 means dont replace
// let splicedElement134=array_numbers.splice(2,1,22);//1 means replce
// let splicedElement125=array_numbers.splice(2,2,22);
//let splicedElement1=array_numbers.splice(2,2,22,44,55);
let splicedElement1=array_numbers.splice(2,1,22,44,66);

console.log(splicedElement1);
console.log(array_numbers);


