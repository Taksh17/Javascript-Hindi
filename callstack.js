//Jab koi js likhte hai to ek global execution banta hai
//Js single threaded hai
//two typer of ec:-
//global exxecution
//functional execution
//inn dono phase ke completion ke baad yeh niche wale phase run hote hai
//code do phase me chlta hai
//1.memory creation phase
//2.execution phase
//browser ke andar this global execution ka value window object ata hai
//iss code se sikhenge kaise code run hota js me
let num1=10
let num2=5
const sum=function(num1,num2){
    return num1+num2
}
let result1=sum(num1,num2)
let result2=sum(19,20)
//step1 me global execution hoga this keyword ke andar
//step2 memory allocation start hoga jisme num1 assign hoga undefined se,num2 hoga undefined se,phir function jo hai sum uska memory allocation hoga jo ki defination of function jaega
//defination me sara part of function jaega
//uske baad result1,result2 ka memory allocation hoga jo ki undefined hoga
//now comes execution phase
//num1,num2 ka value jaega
//jab result1 execute hoga to usme function haii to woh function apna execution start krdega
//iss execution me new environment banega + execution thread banega
//abb yaha wapas se memory phase chlega jo ki function ke lie specific rhega
//or sara process same as hoga memory allocation ka jaise upar hua undefined values aenge and much more
//abb actual execution start hoga jaha num1,num2 ka values jo hai woh pass hoga 
//jab function complete hojata to value ko global executional context me return kregne line 19 me
//call stack lifo based hota hai
//last in first out hota hai normal as stakcs




