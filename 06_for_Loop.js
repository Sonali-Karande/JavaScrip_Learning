for (var test = 1; test <=10; test++) {
    console.log(test);
}
console.log("*********************************");

for (let index = 0; index <=10; index=index+2) {
console.log(index);    
}
//WAP to find first 50 to 40  numbers

console.log("*********************************");
for (let index = 50; index >40; index--) {
    console.log(index);
}
console.log("*********************************");
//WAP to find first 15 even numbers

for (let index = 1; index < 30; index=index+2){
console.log(index);
}
console.log("*********************************");
//WAP to find first 43 odd numbers

for (let index = 1; index < 30; index++) {
    if(index%2!=0)
    {
        console.log(index);
    }
}
console.log("*********************************");
//WAP to find first 43 even numbers

var countEven=0
for (let index = 0; index < 1000; index++) {
    if (index%2==0) {
    console.log(index);
        countEven=countEven+1;
        if(countEven==43)
        break;
    }

}