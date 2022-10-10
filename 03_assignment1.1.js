console.log("****************Question3******************");

var areaTriangle=function(base,height){
    var areaT=1/2*base*height;
    console.log("Area of triangle is:",areaT);

}
areaTriangle(45,34);
console.log("****************Question4******************");
var areaRectangle=function(length,width)
{
    var areaR=length*width;
    console.log("Area of Rectangle is",areaR);
}
areaRectangle(499,917);
console.log("****************Question4******************");
var swap_values=function(arg1,arg2){
console.log("Before swap:",arg1,arg2);
var temp=arg1;
arg1=arg2;
arg2=temp;
console.log("After swap:",arg1,arg2);
}
swap_values("Virat","Anushka");
console.log("************************");
swap_values(1000,2000);
console.log("****************Question5******************");

var stringOperation=function()
{
    var str="JavaScript the most popular language";
    console.log("Total character available in the string is:",str.length);
    console.log("index of character 'S' in the string is:",str.indexOf("S"));
    console.log("index of chatacter 'lang' in the string is:",str.indexOf("lang"));
    // var length=str.length;
    console.log("last character of the string is:",str. charAt(str. length-1));
    console.log("Third character of the string is:",str. charAt(str. length-3));

}
stringOperation();