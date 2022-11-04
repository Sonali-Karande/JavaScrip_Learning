console.log(`**********************Arrow function with no args and no return value*******************************`);
let greet=()=>{
    console.log(`Good Evening, Today is Friday`);
}
greet();
console.log(`**********************Arrow function with 3 args and no return value*******************************`);
let multiplication=(n1,n2,n3)=>{
let mul=n1*n2*n3;
console.log(`Multiplication of ${n1},${n2},${n3} is:  ${mul}`);
}
console.log(`Passing 3 Values:`);
multiplication(5,5,2);
console.log(`Passing 3 Values:`);

multiplication(10,4,1);
console.log(`Passing 2 Values:`);

multiplication(10,4);


console.log(`**********************Arrow function with 5 args and  return value such as received parameters it should do addition*******************************`);
let add5=(n1,n2,n3,n4,n5)=>{
    return`Addition Of ${n1},${n2},${n3},${n4},${n5} is:${n1+n2+n3+n4+n5}`;
}
console.log(add5(100,100,200,349,756));
console.log(add5(1,1,2,3,7));
console.log(add5(70,10,20,34,76));
console.log(add5("I am"," Learning"," ES6"," Features"," In Depth"));
console.log(add5("My"," Name"," is"," Sonali"," Karande"));
