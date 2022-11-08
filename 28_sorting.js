const arrayOfName=["Anil","Nutan","Suyog","DD","Pradnya"];
arrayOfName.sort();
console.log(arrayOfName);
console.log("==============ascending sorting================");
const arrayOfNumber=[22,36,4,50,100,600,77,455];
arrayOfNumber.sort((first,second)=>{
return (first>second?1:-1)
});
console.log(arrayOfNumber);
console.log("==============descending sorting================");

const arrayOfNumber1=[22,36,4,50,100,600,77,455];
arrayOfNumber.sort((first,second)=>{
return (first>second?-1:1)
});
console.log(arrayOfNumber);
let len=arrayOfNumber.length;
console.log(arrayOfNumber1[len-2]);













