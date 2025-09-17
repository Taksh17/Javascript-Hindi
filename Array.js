const myarr=[1,2,3,4]
//js ka array dynamic in nature
//array copy creates an arrya of same refrence point mean change in value of array hoga to actual array me bhi change hoga
//Pop last element of array delete krdega
//unshift array ke start me ek value add krdega
//shift operator removes the first value of array and returns it
//join operator array ko string me convert krdeta hai
//The slice() method in JavaScript is used to extract a portion of an array or string without modifying the original one.
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
const result = fruits.slice(1, 4);
console.log(result);         // ['banana', 'cherry', 'date']
console.log(fruits);         // ['apple', 'banana', 'cherry', 'date', 'fig']
//Other Behaviors:
//slice(2) → slices from index 2 to end
//slice(-2) → last 2 elements
//slice() → copies the entire array
/*
Remove elements
const arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2);   // Remove 2 elements from index 1
console.log(arr);   // ['a', 'd']
Add elements
const arr = ['a', 'd'];
arr.splice(1, 0, 'b', 'c'); // Add 'b' and 'c' at index 1
console.log(arr); 
Replace elements
const arr = ['a', 'b', 'c'];
arr.splice(1, 1, 'x');  // Replace 1 element at index 1 with 'x'
console.log(arr);       // ['a', 'x', 'c'] 
4. Remove from end using negative index
const arr = ['a', 'b', 'c', 'd'];
arr.splice(-2, 1);   // Removes 1 element starting from second last
console.log(arr);    // ['a', 'b', 'd']
*/
//push normal array me add krta value
//concate new array bna kar usme sabko push krdeta
