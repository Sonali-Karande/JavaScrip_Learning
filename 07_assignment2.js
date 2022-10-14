//WAP  to print no.s from 5 to 15 by incrementing 1
console.log(`Numbers from 1 to 15 are:`);    

for (let index =5; index <=15; index++) {
console.log(index);    
}
//WAP  to print no.s from 50 to 40 by decrementing 1
console.log(`Numbers from 50 to 40 are:`);    

for (let index = 50; index>=40; index--) {
console.log(index);    
}
//WAP  to find first 15 odd no,s
console.log(`First 15 ODD numbers are:`); 
oddCounter=0;   
for (let index = 1; index < 100; index++) {
if (index%2!=0) {
    console.log(index);
    oddCounter++;
    if (oddCounter==15) {
        break;
    }
}    
}
//WAP  to find first 10 even no.s
console.log(`First 10 EVEN numbers are:`); 
evenCounter=0;   
for (let index = 0; index < 100; index++) {
if (index%2==0) {
    console.log(index);
    evenCounter++;
    if (evenCounter==10) {
        break;
    }
}    
}
//WAP  to print table of 5 like-5,10,15,...,50
console.log(`Table of 5 are:`); 

for (let index = 1; index <=10; index++) {
    console.log(index*5);
}
//WAP  to print table of 10 like-10,20,30,...,100
console.log(`Table of 10 are:`); 

for (let index = 1; index <=10; index++) {
    console.log(index*10);
}
//WAP  to print table of 10 in reverse order like-100,90.80,70,....,10
console.log(`Reverse Table of 10 are:`); 

for (let index = 10; index>=1; index--) {
    console.log(index*10);
}