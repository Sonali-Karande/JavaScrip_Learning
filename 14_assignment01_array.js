const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array:${fruit_seasonal}`);
console.log(`First element is:${fruit_seasonal[0]}\nLast element is:${fruit_seasonal[fruit_seasonal.length-1]}`);
console.log("*****************************************************************");

console.log("Before Adding papaya");
console.log(fruit_seasonal);
console.log("After Adding papaya");
//console.log(fruit_seasonal.unshift("Papaya"));
fruit_seasonal.unshift("Papaya");
console.log(fruit_seasonal);
console.log("*****************************************************************");

console.log("Removed Mango");

fruit_seasonal.splice(4, 1);
console.log(fruit_seasonal);
console.log("*****************************************************************");

console.log("Adding element 'pineapple' at the last position");
fruit_seasonal.push("Pineapple");
console.log(fruit_seasonal);
console.log("*****************************************************************");

console.log("Inserting 'Dragon Fruit' before 'Water Melon'");
fruit_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruit_seasonal);
console.log("*****************************************************************");

console.log("Replace an element 'Orange' with 'Kiwi'");
fruit_seasonal.splice(2,1,"Kiwi");
console.log(fruit_seasonal);
console.log("*****************************************************************");

console.log("Log  elements starting from index 1 to 4");

let slicedEle=fruit_seasonal.slice(1,4);
console.log(slicedEle);
console.log("*****************************************************************");

console.log("Only select last three elements using 'slice()' ");

console.log(fruit_seasonal);
let lastThree=fruit_seasonal. slice(-3)
console.log(lastThree);
console.log("*****************************************************************");

console.log("Only select last three elements using 'length' property");

let len=fruit_seasonal.length-3;
let s="";
for (let index = len; index < fruit_seasonal.length; index++) {
    const element = fruit_seasonal[index];
s=s+element+" ";
}
console.log(s);

