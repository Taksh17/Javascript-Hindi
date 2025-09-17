//Pure code ko ek package me band krna or uss package ko jaha mann waha utha ke copy lejaskte or use krskte
//Syntax
function myname () {
    console.log("t");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h"); 
}
//function name jo ki refrence hota hai //() execution isse print hota h
myname
//js me number ka data type pass krana imp nhi hai
function sum(number1,number2){
    //function ke andar jo input lete usko parameters bolte
    console.log(number1+number2);
}
//fucntion pass krane ke baad jo value dalte usko arguments bolte
sum
/*function sum(number1,number2){
   let result=number1+number2
   return result
}
const result=sum(4,5)
console.log(result);*/

function myuser(username="soni" ){//yaha soni ek default value hai agar koi username pass nhi hua to soni use hoga
    return (`hello dear man you just ${username} logged in`)
}
console.log(myuser("tony"))