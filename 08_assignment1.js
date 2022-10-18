console.log("****************************Q1 Count total No  of Vowels using includes******************************");
var givenString = "Good Morning IT Champ";
var count = 0;
var vowelsLowerCase="aeiou";
var vowelsUpperCase="AEIOU";
var strLowerCase = givenString.toLowerCase();
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index);
    var isLowerAvailable=vowelsLowerCase.includes(char);
    var isUpperAvailable=vowelsUpperCase.includes(char);
    if (isLowerAvailable||isUpperAvailable) {
        count++;
    }

}
    console.log(`Total no of vowels using include()are: ${count}`);
console.log("****************************Q2 Count total No  of Vowels using Function******************************");


//WAP to count total no of vowels  using function

function countVowels(str1) {
    var count = 0;
var vowelsLowerCase="aeiou";
var vowelsUpperCase="AEIOU";
    for (let index = 0; index < str1.length; index++) {
       var char = str1.charAt(index);
       var isLowerAvailable=vowelsLowerCase.includes(char);
       var isUpperAvailable=vowelsUpperCase.includes(char);
       if (isLowerAvailable||isUpperAvailable) {
           count++;
       }
    }

    return `"${str1}" is:${count}`;
}


//var result = countVowels(str);
console.log(`The total number of vowels in string  ${countVowels("I Love JavaScript")}`);
console.log(`The total number of vowels in string  ${countVowels("Soon I will be Angular IT Champ")}`);

console.log("****************************Q3 Sum of Number from 1 to 10******************************");

var sum1To10=function(){
    var sum=0;
    for (let index = 1; index <= 10; index++) {
        sum=sum+index;
    }
    console.log(`Sum of first 10 numbers is:${sum}`);
}
sum1To10();
console.log("****************************Q4 Sum of square from 1 to 10******************************");

function sumSquare()
{
    var sum = 0;
    for (let index = 1; index <= 10; index++) {
       
        var square= index * index;
        sum=sum+square;
    }
    return sum;
}
var sumResult =sumSquare();
console.log(`sum of square of num from 1 to 10 = ${sumResult}`);
console.log("****************************Q5 Even positioned characters******************************");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ"; 
function evenPositionedChar(str){
    var result= " ";
    for (let index = 0; index < str.length; index++) {
        
        if(index %2 ==0 && str.charAt(index) != " ")
        {
            result = result + str.charAt(index);
        }
        
    }
    return `Even positioned characters in string"${str}" is:${result}`;
}
var ans =evenPositionedChar(str1);
var result1 =evenPositionedChar(str2);
console.log(ans);
console.log(result1);
console.log("****************************Q6 Odd positioned characters******************************");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ"; 
function oddPositionedChar(str){
    var result= " ";
    for (let index = 0; index < str.length; index++) {
        
        if(index%2!=0 && str.charAt(index) != " ")
        {
            result = result + str.charAt(index);
        }
        
    }
    return`Odd positioned characters in "${str}" is:${result}` ;
}
var ans =oddPositionedChar(str1);
var result1 =oddPositionedChar(str2);
console.log(ans);
console.log(result1);


// console.log("*****************************************************");


// // Count the total number vowels using includes() for string → “Good Morning IT Champ”
// var countVowels = function(myString) {
//     console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
//     //var myString = "Good Morning IT Champ";
//     var vowelsLoweCase = "aeiou";
//     var vowelUpperCase = "AEIOU";
//     var vowelsCount=0;
//     for (let index = 0; index < myString.length; index++) {
//        var char =  myString.charAt(index);
//        var isLowerAvailable =  vowelsLoweCase.includes(char);
//        var isUpperAvailable =  vowelUpperCase.includes(char);
//        if (isLowerAvailable || isUpperAvailable) {
//             vowelsCount = vowelsCount + 1;
//        }
//     }
//     console.log(`Total Vowels count : ${vowelsCount}`);
// }
// countVowels("Good Morning IT Champ");
// console.log("============================");
// function evenPositionedChars(myString){
//     for (let index = 0; index < myString.length; index++) {
//        // console.log(index%2==0);
//        var chh = myString.charAt(index);
//        if (index%2==0 && chh!=" ") {
//           console.log(chh);
//        }
//        //var chh = myString.charAt(index);
        
//     }
// }
// evenPositionedChars("Hard work always pays back");
