console.log("*****************************Reverse of string**********************");
    function reverseString(str) {
    var lenStr=str.length-1;
var reverseString="";
  for (let index =lenStr; index >=0; index--) {
    reverseString=reverseString+str.charAt(index);
  }  
  return reverseString;
    
}
console.log(`Reverse of the string is:${reverseString("Hard work always pays back")}`);
console.log(`Reverse of the string is:${reverseString("Soon I will be Angular IT Champ")}`);