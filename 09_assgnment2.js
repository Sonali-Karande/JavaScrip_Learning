console.log("Q=>1 Reverse the string and ignore white spaces");


console.log("*****************************Reverse of string**********************");
    function reverseString(str) {
    let lenStr=str.length-1;
let reverseString="";
  for (let index =lenStr; index >=0; index--) {
    if (str.charAt(index)!=" ") {
    reverseString=reverseString+str.charAt(index);
        
    }
  }  
  return `"${str}"is:${reverseString}`;
    
}
console.log(`Reverse of the string ${reverseString("Hard work always pays back")}`);
console.log(`Reverse of the string ${reverseString("Soon I will be Angular IT Champ")}`);