const array1=[1,2,4];
const array2=[5,6,7];
//const array3=array1.concat(array2);
const array3=[...array1,...array2];
console.log(array3);
console.log("=============================   ");
var arrayOfNumbers=[1,3,7,8,9,3,7];
console.log("=============Resize Array===============   ");
console.log(arrayOfNumbers.length);
//arrayOfNumbers.length=10;

arrayOfNumbers.length=3;
console.log(arrayOfNumbers.length);
arrayOfNumbers.push(99);
arrayOfNumbers.push(56);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
var arrayLength=arrayOfNumbers.length;
console.log(`total no of element in the array: ${arrayLength}`);
console.log(`element at 4th index is: ${arrayOfNumbers[0]}`);
arrayOfNumbers[2]=77;
console.log(arrayOfNumbers);

console.log(typeof arrayOfNumbers);
//let otherArray=arrayOfNumbers;
let otherArray=[...arrayOfNumbers];
arrayOfNumbers[3]=44;
console.table(arrayOfNumbers);
console.table(otherArray);










for (let i = 0; i < array.length; i++) {
    const element = array[index];
    let pro=pro*element;
    console.log(pro);
}



