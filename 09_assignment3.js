console.log("Q=1:Print no from 5 to 15 using while loop");
let i = 5;
let s1 = "";

while (i <= 15) {

    s1 += i + " ";
    i++;

}
console.log(s1);


console.log("***********************************************************");
console.log("Q=2:Print no from 50 to 40 by decrementing 1 using do while loop");
let count = 50;
let s = "";

do {

    s += count + " ";
    count--;

} while (count >= 40);
console.log(s);
console.log("***********************************************************");
console.log("Q=3:Print first 15 odd no.s using while loop");
let oddCount = 0;
let no = 1;
let s2 = "";

while (no <= 100) {

    if (no % 2 != 0) {
        s2 = s2 + no + " ";

        oddCount++;
        if (oddCount == 15)
            break;

    }
    no++;


}
console.log(s2);
console.log("***********************************************************");
console.log("Q=4:Print first 10 even no.s using while loop");
let evenCount = 0;
let no2 = 0;
let st = "";
while (no2 <= 100) {

    if (no2 % 2 == 0) {

        st = st + no2 + " ";
        evenCount++;
        if (evenCount == 10)
            break;

    }
    no2++;

}

console.log(st);

console.log("***********************************************************");
console.log("Q=5:WAP for table of 5");
let no3=1;
let s3="";
let table=1;
while (no3<=10) {
table=no3*5;
no3++;
    s3=s3+table+" ";

}
console.log(s3);

console.log("***********************************************************");
console.log("Q=6:WAP for table of 10");
let no4=1;
let s4="";
let table1=1;
while (no4<=10) {
table1=no4*10;
no4++;
    s4=s4+table1+" ";

}
console.log(s4);
console.log("***********************************************************");
console.log("Q=7:WAP for reverse table of 10");
let no5=10;
let s5="";
let table2=1;
while (no5>0) {
table2=no5*10;
no5--;
    s5=s5+table2+" ";

}
console.log(s5);