let arrayOfNumbers=[2,3,4,5];
arrayOfNumbers.push(3);
 console.log(arrayOfNumbers);
 arrayOfNumbers.length=0;//empty array
 let setOfNumbers=new Set();
console.log(typeof setOfNumbers);
console.log("********************adding element into set collection********************8");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);
console.log(setOfNumbers);
console.log("********************adding duplicate element into set collection********************8");
setOfNumbers.add(7);
console.log(setOfNumbers);
console.log("********************checking element into set collection********************8");
console.log(setOfNumbers.size);
console.log("********************delete element into set collection********************8");
setOfNumbers.delete(9);
console.log(setOfNumbers);
console.log(setOfNumbers.size);
console.log("********************check whether  element 7 into set collection********************");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));
//setOfNumbers.clear();//empty the set
console.log("************Traversing set***************");
for (const element of setOfNumbers) {
    console.log(element);
}
console.log("************How to remove duplicate element from array***************");

//let setNumbers=new Set();
let arrayNumbers=[2,3,4,5,6,3,5];
//let setNumbers=new Set(arrayNumbers);
let arrayUniqueElements=[...new Set(arrayNumbers)];
console.log(arrayUniqueElements);
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const element = array[index];
//     setNumbers.add(element);
// }





