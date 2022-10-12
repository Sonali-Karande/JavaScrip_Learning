console.log("**********************Question 1**********************");
var wordLengthSquare = function (arg) {
    var strLength = arg.length;
    console.log(`Length of word "${arg}" is:${strLength}`);
    return strLength * strLength;
}
var lenSquare1 = wordLengthSquare("JavaScript");
console.log(` square Length of word "JavaScript" is:${lenSquare1}`);
console.log("*************************************************");
var lenSquare2 = wordLengthSquare("Google");
console.log(` square Length of word "Google" is : ${lenSquare2}`);
console.log("*************************************************");

var lenSquare3 = wordLengthSquare("Developer")
console.log(` square Length of word "Developer" is:${lenSquare3}`);
console.log("**********************Question 2**********************");
function reverseString() {
    var str = "I am Angular Developer";
    var reverse = str.split('').reverse().join('');
    console.log(`Reverse of string"${str}" is:${reverse}`);
    var strLen = str.length;
    // var totalWord = str.split("");
    console.log(`Length of the string is:${strLen}`);
    var totalWord = str.split(" ").length;
    console.log(`Total no of words in the string is:${totalWord}`);
    var divide = strLen / totalWord;
    console.log(`Dividing string length by total no of word in the string:${divide}`);
    var multiply = strLen * totalWord;
    console.log(`String length multiply by total words in the string:${multiply} `);

}
reverseString();