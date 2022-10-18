console.log("Q=>1:Total no of vowels in string:'I am very good IT Developer'*****************");
     let str="I am very good IT Developer";
let vowelsLoweCase = "aeiou";
let vowelUpperCase = "AEIOU";
let count=0
for (let index = 0; index < str.length; index++) {

    let char=str.charAt(index);
    let isLowerAvailable =  vowelsLoweCase.includes(char);
       let isUpperAvailable =  vowelUpperCase.includes(char);
    if (isLowerAvailable||isUpperAvailable) {
        count++;
    }

}
console.log(`Total no of vowels in string"${str}" is:${count}`);
console.log("****************************************************************************");
console.log("Q=>2:Write a function to get the sum of cube of number from 1 to 5'*****************");
function sumCubeOf1to5() 
{
    let sum=0;
    for (let index = 1; index <=5 ; index++) {
        let cube=index*index*index;
        sum=sum+cube;

    }
    console.log(`the sum of cube of number from 1 to 5 is:${sum}`);
}
sumCubeOf1to5();
console.log("****************************************************************************");


console.log("Q=>3:Write a function oddPositionedChars() with one arguments'*****************");
function oddPositionedChars(str) {
    let result=" ";
    for (let index = 0; index < str.length; index++) {
        if(index%2!=0 && str.charAt(index) != " ") {
            result=result+str.charAt(index);
        }
        
    }
    
    return `"${str}"is:${result}`;
}
console.log(`Odd positioned characters in string-1:${oddPositionedChars("Hard work always pays back")}`);
console.log(`Odd positioned characters in string-2:${oddPositionedChars("Soon I will be Angular IT Champ")}`);