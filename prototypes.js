//prototypes in js:-
/*
In JavaScript, functions are also objects.
That means you can attach properties to them just like you would with any object.
Here, you are attaching a custom property power with value 2 to the function object itself.
*/
function multipleBy5(num){
    return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
//function function bhi hai or sath me object bhi h
/*
Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
//prototypes jo hote hai woh basically function ke andar ek or function ko inject krne ka tarika hota hai:-
//syntax:-function name.prototype.jo new function inject krna uska name=function//yaha ham usko as a function declare krdete hai
//or uske andar ek return statement daal do.