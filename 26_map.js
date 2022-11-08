const arrayOfNumber=[2,3,4,5,6,1];
const newArray=arrayOfNumber.map((element)=>{
   return element+5;
});
console.log(newArray);
console.log(arrayOfNumber);

const newArray1=arrayOfNumber.map((element,index)=>{
    if (index<=2) {
    return element+5;
        
    } 
    return element;
 });
 console.log(newArray1);






