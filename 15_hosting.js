
console.log(myName);
// console.log(rollNo);Not allowed to access as variable declared using let doesn't hoisted

// console.log(pin_code);Not allowed to access as variable declared using let doesn't hoisted

var myName="Sonali Karande";

let rollNo=123;
const pin_code=1234;


show();
function show() {
    console.log("Show functions");
}
//display();not allowed

var display=function(){
    console.log("Inside display function");
}
display();


