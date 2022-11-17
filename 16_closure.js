var global_var=300;
function outer() {
   let outer_fun_var=100;
   //console.log(outer_fun_var); 
   let inner_fun=function()
   {
let inner_fun_var=200;
console.log(inner_fun_var,outer_fun_var,global_var);
   }
   return inner_fun;
}
let  returnValue=outer();
returnValue();
