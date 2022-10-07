console.log("=============================Assignment2============================");

console.log("=======================Question1==========================");

console.log("=====Functions no arguments and no return types=====");
console.log("myInfo() Function");
function myInfo(){
    console.log("===My Hobbies===");
    console.log("My name is Sonali Arjun Karande\nI am from Kole\nI like:1- to listen music\n2-Gardening\n3-Cooking");
}
myInfo();
console.log("mySrtenght() Function");

function mySrtenght()
{
    console.log("===My strength===");
    console.log("Quick Learner");
    console.log("Self disciplined");
    console.log("Problem solving ability");
}
mySrtenght();
console.log("=======================Question2==========================");
function fullName(firstName,lName)
{
    console.log("Concatenation of first name and last name is:",firstName + lName);
}
fullName("Sonali","Karande");
console.log("=======================Question3==========================");
function swap_values(arg1, arg2){
    console.log("---------- Before swap-------------");
    console.log(arg1, arg2);
    console.log("---------- After swap-------------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values(1000, 2000);
console.log("=======================Question4==========================");
function add_three_numbers(num1,num2,num3)
{
    console.log(num1+num2+num3);
}
add_three_numbers(10.23,600,40);
add_three_numbers("Hello ","good ","morning ");