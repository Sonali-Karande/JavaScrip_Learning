function stringHandsOn() {
    var str = " Hey you are doing good, keep it up  ";
    console.log(`1:Original String:${str}`);
    console.log("*************************************************");
    var strLen = str.length;
    console.log(`2:Length of the string:${str.length}`);
    console.log("*************************************************");
    var trimResult = str.trim();
    console.log(`3:Trim method string is:${trimResult}`);
    var strLenAfterTrims = trimResult.length;
    // console.log(`After trim Length of string is:${strLenAfterTrims}`);
    console.log("*************************************************");
    var extraSpaceCount = strLen - strLenAfterTrims;
    console.log(`4:Total no of extra spaces count that is removed in step 3:${extraSpaceCount}`);
    var firstCharacter = trimResult.charAt(0);
    console.log("*************************************************");
    var lastCharacter = trimResult.charAt(strLenAfterTrims - 1);
    console.log(`5:First character After trim is:${firstCharacter},Last character After trim is:${lastCharacter}`);
    console.log("*************************************************");
    var strLenAfterTrims = trimResult.length;
    console.log(`6:After trim total words available in string is:${strLenAfterTrims}`);
    console.log("*************************************************");
    var inOf = str.indexOf("good");
    console.log(`7:Index of word "good"in String is: ${inOf}`);
    console.log("*************************************************");

    console.log(`8:Printing substring Starting from 22 using subString:${trimResult.substring(22)},Printing substring Starting from 22 using slice:${trimResult.slice(22)}`);
    console.log("*************************************************");

    console.log(`9:Whether string ends with word "up":${trimResult.endsWith("up")}`);
    console.log("*************************************************");

    console.log(`10:Whether string starts with word "Hey":${trimResult.startsWith("Hey")}`);
    console.log("*************************************************");

    console.log("Using split():", trimResult.split(" "));

}
stringHandsOn();