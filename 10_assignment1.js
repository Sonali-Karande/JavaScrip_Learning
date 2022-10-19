
function gradeSystem(score, grade) {
    grade = "";
    switch (true) {
        case score <= 0:
            console.log("******************************************************************************");

            return `Invalid input: "${score}" please enter positive numbers`;

            break;
        case score > 100:
            console.log("******************************************************************************");

            return `Invalid input: "${score}" please enter number from 1 to 100 numbers`;

            break;
        case score < 35:

            console.log("******************************************************************************");
            return `Your score is: ${score} You are Failed`;
            break;

        case score >= 35 && score < 40:
            console.log("******************************************************************************");

            return `Your score is: ${score} You are Passed`;
            break;

        case score >= 40 && score < 60:
            console.log("******************************************************************************");

            return `Your score is: ${score} You are Passed and GRADE is "C"`;
            break;

        case score >= 60 && score < 75:
            console.log("******************************************************************************");

            return `Your score is: ${score} You are Passed and GRADE is "B"`;
            break;

        case score >= 75 && score < 90:
            console.log("******************************************************************************");

            return `Your score is: ${score} You are Passed GRADE is "A"`;
            break;

        case score >= 90 && score <= 100:
            console.log("******************************************************************************");

            return `Your score is: ${score} You are Passed GRADE is "A+"`;
            break;



        default:
            console.log("******************************************************************************");

            return `  Invalid input: "${score}" please enter numbers from 1 to 100`;


            break;

    }
}
console.log(gradeSystem(66));
console.log(gradeSystem(13));
console.log(gradeSystem(" "));
console.log(gradeSystem(98));
console.log(gradeSystem("Fifty Five"));
console.log(gradeSystem(35));
console.log(gradeSystem(75));
console.log(gradeSystem(null));
console.log(gradeSystem(undefined));
console.log(gradeSystem(-20));
console.log(gradeSystem(102));

console.log(gradeSystem(55));
console.log(gradeSystem(82));
console.log(gradeSystem(200));

