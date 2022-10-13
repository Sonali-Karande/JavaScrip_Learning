
console.log("**************************ASSIGNMENT:- OA***********************");

console.log("**************************question 1***********************");


function maleMarriageEligibility(gender, age, boyName) {
    var eligibility = gender == "male" && age >= 21 ? `Hey ${boyName} You are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    console.log(eligibility);
}
maleMarriageEligibility("male", 25, "Billgates");
maleMarriageEligibility("male", 17, "Stew Jobs");

console.log("**************************question 2***********************");
function femaleMarriageEligibility(gender, age, girlName) {
    if (gender == "Female" && age >= 18) {
        return `Hey ${girlName} You are eligible for marriage`;
    }
    else {
        return `Hey ${girlName} you are not eligible for marriage`;
    }
    // var eligibility=gender=="female" && age>=18?`Hey ${girlName} You are eligible for marriage`:`Hey ${girlName} you are not eligible for marriage`;
    // console.log(eligibility);
}
console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));


console.log("**************************ASSIGNMENT:- OB***********************");

console.log("**************************question 1***********************");

function isEvenOdd(number) {
    if (number % 2 == 0) {
        return `${number} is even`;
    }
    else {
        return `${number} is odd`;
    }
}
console.log(isEvenOdd(45));
console.log(isEvenOdd(70));
console.log(isEvenOdd(67));
console.log(isEvenOdd(98));
console.log("**************************question 2**********************");

function eligibleVote(age) {
    if (age >= 18) {
        return `${age} age is eligible for vote`;
    } else {
        return `${age} age is not eligible for vote`;

    }
}
console.log(eligibleVote(18));
console.log(eligibleVote(20));
console.log(eligibleVote(17));
console.log(eligibleVote(40));
console.log("**************************question 3**********************");
function stringContains(str) {
    if (str.length > 10) {
        return `${str} contains more than 10 character`;
    } else {
        return `${str} does not contains more than 10 character`;

    }
}
console.log(stringContains("JavaScript-ES6"));
console.log("**************************question 4**********************");
function isStringStart(str) {
    if (str.startsWith("Java")) {
        return `${str} is start with Java`;
    } else {
        return `${str} is not start with Java`;

    }
}
console.log(isStringStart("JavaScript Language"));


