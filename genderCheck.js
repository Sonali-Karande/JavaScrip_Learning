let genderCheck=function(gender){
    if (gender=="Male") {
     return`Gender is:${gender}`;
    } else if (gender=="Female") {
    return`Gender is:${gender}`;
    }
    else if (gender=="Others") {
        return`Gender is:${gender}`;
    }
    else{
        return `Invalid gender:${gender}`
    }
}
console.log(genderCheck("Male"));
console.log(genderCheck("Female"));
console.log(genderCheck("Others"));
console.log(genderCheck("Riya"));
function genCheck(gender) {
    if(gender=="Male"||gender=="Female"||gender=="Others")
    {
        return`Gender is:${gender}`;
 
    }
else
{
    return `Invalid gender:${gender}`
}
}
console.log(genCheck("Male"));
console.log(genCheck("Female"));
console.log(genCheck("Others"));
console.log(genCheck("Riya"));