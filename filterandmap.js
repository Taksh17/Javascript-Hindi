const mynum=[1,2,3,4,5,6,7]
let result=mynum.filter((num)=> num>4)
console.log(result);
/*
Syntax of filter()
javascript
Copy
Edit
array.filter(callback(currentValue, index, array), thisArg);
🔹 Parameters:
Parameter	Description
callback	A function that runs for each element and returns true to keep the element.
currentValue	The current element being processed in the array.
index (optional)	The index of the current element.
array (optional)	The original array being processed.
thisArg (optional)	Value to use as this inside the callback function.
*/
const newnum=[]
newnum.forEach( (mynum)=>{
    if(mynum>1){
        newnum.push(mynum)
    }
})
console.log(mynum);
/*Important Notes:
❌ forEach() does NOT return a new array.

❌ You can’t break or return early from forEach() (use for, for...of, or some() for that).

✅ Best when you want to do something with each item, not transform or filter them.*/
/*
let userBooks = books.filter((bk) => bk.genre === 'History');
🔹 What’s Happening:
This uses an arrow function with an implicit return.

✔ Why it works:
No curly braces { }

Arrow functions without braces automatically return the result of the expression.

✅ Line 2:
javascript
Copy
Edit
userBooks = books.filter((bk) => { return bk.publish >= 1995 });
🔹 What’s Happening:
This uses an arrow function with curly braces, which requires an explicit return.

❗ Why return is needed here:
When you use { }, JavaScript expects a block of code, not an implicit return.

So, you must write return manually.

🔁 Quick Rule:
Style	Requires return?
param => expression	❌ No
param => { return statement }	✅ Yes
param => { statement }	✅ Yes

🔍 Summary:
✅ No {} → automatic return (good for short expressions)

✅ With {} → you must use return explicitly

Let me know if you want real-time examples or dry runs to visualize it.
*/
const numbernew=[1,2,3,4,5,6,7]
const hee=numbernew.map( (num)=> num+10)
console.log(hee);
/*
 map() in JavaScript
The .map() method is used to transform each element of an array and return a new array with the results.
*/
/*Both are Array methods and iterate over elements.

map() is for transforming and returning a new array.

forEach() is for doing something with each item (like logging, storing, etc.), but doesn’t return anything.
*/
//chaining:-
const arr3=[1,2,3,4,5]
const newarr3=arr3.map((num)=> num*10).map((num)=>num+1)
console.log(newarr3);
//reduce function:-
const arr4=[1,2,3,4]
const result2=arr4.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval ${currval}`);
    return acc+currval
},0)
console.log(result2);
/*
JavaScript .reduce() Function
The .reduce() method is used to reduce an array to a single value — like a number, object, or string — by applying a callback function to each element and accumulating the result.

✅ Syntax:
javascript
Copy
Edit
array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);
🔹 Parameters:
Parameter	Description
accumulator	The running total/result from previous iterations
currentValue	The current element being processed
index (optional)	The index of the current element
array (optional)	The full array being processed
initialValue	The starting value for the accumulator (RECOMMENDED)
*/





