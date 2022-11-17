var myName="TCS the Indian IT Giant Company";
var lenStr=myName.length-1;
var reverseStr="";
for (let index = lenStr; index >=0; index--) {
    console.log(myName.charAt(index));
reverseStr=reverseStr+myName.charAt(index);
}
console.log(reverseStr);
