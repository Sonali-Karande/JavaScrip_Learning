let mohitPerson={
    fullName:"Sachin Tendulkar",
    city:"Mumbai",
    age:42,
    isMarried:true
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
    }
console.log("*******************************8");
}for (const key in mohitPerson) {
        const element = mohitPerson[key];
        console.log(element,key);
}