var wordLenghtSquare = function(givenWord){
    var wordLength = givenWord.length;
    var sqr = wordLength * wordLength;
    return sqr;
 
 }
 var result = wordLenghtSquare("JavaScript");
 log(result);
 
 var givenString = "I am Angular Developer";
 var strLength = givenString.length;
 var arryayWords = givenString.split(" ");
 var count  = arryayWords.length;
 var res = strLength / count;
 log(res)
 