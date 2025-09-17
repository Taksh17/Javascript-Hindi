const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
//for of aisa loop jisme hmlog ko koi initialize updation kuch nhi krna hota hai
//yeh khud me hin analyze krleta hai kaha se kaha tak kaise chlna hota hai
//isme iterator ka name dedo or jis object par iterate krna hai uska name
//Maps
//isme key or values rakhte hai
//it contains all the unique values
//map bhi object hai
const map=new Map()
    map.set("in","usa")
    map.set("hoo","aus")
    map.set("yam","india")
    console.log(map);
    //loop on map
    for (const [key,value] of map) {
        //destructure or map hua jaha key variable key hold krega value value of map hold krega
        console.log(value);
    }
    const obj1={
        "username":"hello",
        "age":20,
        "gmail":"taaksh"
    }
    
//for of loop object par directly kaam nhi krta
//objects ko iterate krna hai to for in loop use kro
for (const key in obj1) {
    console.log(obj1[key]);
}
//for in loop me destructed pair nhi ban skte jaise for of loop me bna tha [key,value]
const arr2=[2,3,4,5,6]
for (const key in arr2) {
    console.log(arr2[key]);
}
/*Difference: for...in vs for...of
Feature	for...in	for...of
Works on	Plain objects ({})	Iterables (Array, Map, Set)
Iterates over	Keys (property names)	Values (or entries for Map/Set)
Can be used on Map	❌ No	✅ Ye*/
//major loops used in iteration of array:-
//for each loop
//for each loop:-
const coding=["js","c++","python","hmtl"];
coding.forEach(function(num,index){
    console.log(`index is ${index} and value is ${num}`);
})
/*
forEach Loop in JavaScript
The forEach() method is used to iterate over arrays in JavaScript. It executes a callback function once for each array element, in order.

✅ Syntax:
javascript
Copy
Edit
array.forEach(function(currentValue, index, array) {
  // your code here
});
OR using arrow function:

javascript
Copy
Edit
array.forEach((currentValue, index, array) => {
  // your code here
});
🔑 Parameters:
Parameter	Description
currentValue	Required. The current element being processed.
index	Optional. The index of the current element.
array	Optional. The array forEach() was called upon.
*/


