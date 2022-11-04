function message() {
    console.log("Inside messsge function");
    let inner_fun=function()
    {
        console.log("Inside inner_fun function");

    }
    return inner_fun;
}
message()();
console.log("====================================");

let returnFun=message();
returnFun();
console.log("====================================");
function message() {
    console.log("Inside message function");
    return function()
    {
        console.log("Inside inner_fun function");

    }
    // return inner_fun;
}

message()();
console.log("====================================");
console.log("====================================");
function message() {
   console.log("Inside messsge function");
    let inner_fun=function()
    {
        console.log("Inside inner_fun function");

    }
    return 10;


}

 let sum=message()+100;
 console.log(sum);
console.log("====================================");

// Functions are known as first class citizens in JavaScript
// It is because of three reasons
//1.  Function can be stored in a variable ---> Function Expression
//2.  Function can be passed as an argument to another function ---> Callbacks
//3 . A function can return another function


// 3 . A function can return another function

function message() {
    console.log("Inside message function ");
    return function(){
        console.log("Inside inner function");
    }
}

message()();
