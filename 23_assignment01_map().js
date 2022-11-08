const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log("**************************** Add 10 into each element and log new array result on console using map( )*******************************");
console.log(`Original array:${array_numbers}`);

let newArrayAdd5=array_numbers.map((element,index)=>{
return element+10;
});
console.log(`After adding 10 in Array:${newArrayAdd5}`);
console.log("***********************Square the each array element and log on console************************************8");
console.log(`Original array:${array_numbers}`);

let newSquare=array_numbers.map((element,index)=>{
return element*element;
});
console.log(`Square of element is:${newSquare}`);
console.log("********************Add the index value into its corresponding each array element and log new array result on console***************************************");
console.log(`Original array:${array_numbers}`);

let array=array_numbers.map((element,index)=>{
return element+index;
});
console.log(`Addition of index and array is:${array}`);










