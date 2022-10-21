function fibonacciSeries(num) {
    let n1 = 0, n2 = 1, nextTerm;

let s="";
if(num < 1)
{
    return num;
}
for (let i = 1; i <= num; i++) {
    s=s+n1+" ";
    
    // console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
return `${s}`;
}
console.log(`Fibonacci Series Till 4th occurrence:${fibonacciSeries(4)}`);
console.log(`Fibonacci Series Till 10th occurrence:${fibonacciSeries(10)}`);
console.log(`Fibonacci Series Till 15th occurrence:${fibonacciSeries(15)}`);

