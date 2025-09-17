//jab function me number of arguments jo ki pass honge nhi pta tab hmlog rest operator ka use krenge
function total(...num1){//yeh dikhne me kind of spread operator jaisa hota h but multiple arguments ko ek array ke form me represent krta h
    return num1
}
console.log(total(200,300,400,500,"tilu"));
function total2(val1,val2,...num2){
    return {val1,val2,num2}
}
console.log(total2(200,300,400,500,600,700,800));
//aise hamne multiple arguments ko input me lia or print krdia
//Passing an object to function
const myuser={
    username:"takla",
    age:45,
    salary:4500
}
function objecttofunction(anyobject){
    //anyobject se koi bhi object pass hoskta hai
    return (`the name of user is ${myuser.username} and salary is ${myuser.salary}`);
}
console.log(objecttofunction(myuser));
//argument me object name daal do usko pass krne ke lie



