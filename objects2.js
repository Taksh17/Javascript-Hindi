//Singelton object creation
//using constructor method:-
//yeh niche wala concept basically ek empty object bnaega
//const tinder=new Object()
/*const tindergoo={}//yeh literals ka use krke ek empty object bnata
    tindergoo.id ="hello56@gmail.com",
    tindergoo.age = 45,
    tindergoo.name = "shimla"*/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { ...obj1, ...obj2 };

//console.log(obj3);
//Spread operator use kro woh 2 object ko merge krdega par value same hoga to overwrite krdega
//another way
const obj4=Object.assign(obj1,obj2)
console.log(obj4);
//isse bhi 2 object merge hojate hai
//par isme obj1 ko modify krega to uska value change hojaega
console.log(obj1);
//isko prevent krne ke lie
const obj5=Object.assign({},obj1,obj2)
//{} iss bracket se ek new empty object ban jaega jaha value merge hoke aaenge or obj1 as it is rhga










