// // program to check if a number is prime or not

// // take input from the user
// const number = -2;


// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i <= number; i++) {
//         if (number % i == 0) {
//    console.log( `${number} is not prime`);
//         }
//         else if (number%i!=0)
//         {
//             console.log( `${number} is prime`);

//         }
//     }

// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }
console.log("************************************************************************************");
let count=0;

const array=[6,7,11,23,46,77,5,6,7,0,2,1,21,5,17,19,67];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%index==0||element<=1||element==21) {
       console.log(`${element} is not prime`);
    }
    else if (element%index!=0)
     {
count++;
console.log( `${element} is prime`);

    }
   
}
console.log( `total no of prime in the array is${count}`);
console.log("************************************************************************************");


function prime(num) {
    let count = 0;
    let s = "";
    for (let i = 2; i <= num; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) {

                break;
            }
        }
        if (i == j) {
            count++;
            s = s + i + "  ";

        }

    }
    console.log(`Prime Numbers up to ${num} are: ${s}`);

    return `Total no of Prime nos are:${count}`;

}


console.log(prime(10));
console.log(prime(20));
console.log(prime(70));
console.log(prime(100));
console.log(prime(80));
console.log(prime(50));
console.log(prime(250));







