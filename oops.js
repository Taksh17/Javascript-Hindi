//object is nothing but collection of properties and methods
//parts of object:-
//object literals.
//constructor function:-
/* 
To call a function like a constructor in JavaScript, you use the new keyword ✅
Your example updated:
function Person(name) {
  this.name = name;
}
const p1 = new Person("Alice");   // 👈 called with new
console.log(p1);                  
console.log(p1.name);
🔎 What happens here:
new Person("Alice")
Creates a new empty object → {}
Sets this inside Person to point to that new object
Assigns this.name = "Alice" → { name: "Alice" }
Returns the object automatically
So now:
p1 will be an object:
Person { name: "Alice" }
p1.name → "Alice"
✅ Output will be:
Person { name: 'Alice' }
Alice
⚡ Tip:
That’s exactly how constructor functions are meant to be used.
If you forget new, the function acts like a normal function and doesn’t construct an object.
*/
