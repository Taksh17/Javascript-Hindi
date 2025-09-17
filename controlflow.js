//if else statement
/*if(condition){
    //scope aega yaha par
}*/
//if(condition) execute //implicit scope bolte  hai isko
/* switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  ...
  default:
    // code block
}
*/
//truthy values:-sare values ko assume krte hai ki woh true hai already
//Non-zero numbers (positive or negative)
//1, -1, 3.14, -999, Infinity, -Infinity
//2. Non-empty strings
//"hello", "0", "false", " ", "js"
// 3. Objects (including empty objects)
//{}, { name: "John" }
//4. Arrays (including empty arrays)
//[], [1, 2, 3]
// 5. Functions
//function() {}, () => {}
//6. Dates
//new Date()
// 7. Any non-null object instance
/*new Boolean(false)  // Yes, it's truthy!
new Number(0)       // Also truthy!
new String("")      // Still truthy!*/
/*8. Symbol values
js
Copy
Edit
Symbol("id")
🔹 9. BigInt values
js
Copy
Edit
1n, -1n*/
//falsy values:- falsy values are values that evaluate to false when used in a Boolean context (like inside if, while, etc
/*| Value       | Description              |
| ----------- | ------------------------ |
| `false`     | Boolean false            |
| `0`         | Number zero              |
| `-0`        | Negative zero            |
| `0n`        | BigInt zero              |
| `""`        | Empty string             |
| `null`      | Absence of value         |
| `undefined` | Uninitialized or missing |
| `NaN`       | Not a Number             |
*/
const useremail="babbar"
if(useremail){
    console.log("welcome");
}
else{
    console.log("chala ja");
    
}
//The nullish coalescing operator :-
//The nullish coalescing operator (??) in JavaScript is used to provide a default value when a variable is either null or undefined.
//let result = a ?? b;
//result will be:
//a if a is not null or undefined
//b if a is null or undefined