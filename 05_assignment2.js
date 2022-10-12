console.log("**********************Question 1**********************");

var greatestNo=function(num1,num2){
var greatestNoCheck=num1>num2?num1:num2;
console.log(`Greatest of ${num1} and ${num2} is:${greatestNoCheck}`);
}
console.log("**********************Question 1.1**********************");

greatestNo(10,-10);
console.log("**********************Question 1.2**********************");

greatestNo(800,899);
console.log("**********************Question 2**********************");
var isEvenOdd=function(num1)
{
    var result=num1%2==0?true:false;
     return result;
}
console.log(`29 isEvenOrOdd:${isEvenOdd(29)}`);
console.log("******************************************");
console.log(`44 isEvenOrOdd:${isEvenOdd(44)}`);
console.log("******************************************");

console.log(`0 isEvenOrOdd:${isEvenOdd(0)}`);
console.log("******************************************");

console.log(`101 isEvenOrOdd:${isEvenOdd(101)}`);
console.log("**********************Question 3**********************");
var evenOddLen=function(arg){
var strLen=arg.length;
var evenOdd=strLen%2==0?"EVEN":"ODD";
return evenOdd;
}
console.log(`"Javascript" word has length: ${evenOddLen("JavaScript")}`);
console.log(`"developer" word has length: ${evenOddLen("developer")}`);
console.log(`"Google" word has length: ${evenOddLen("Google")}`);