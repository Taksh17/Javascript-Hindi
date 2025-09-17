// Immediately Invoked Function Expression
//global scope ke pollution ko remove or kam krne ke lie hamlog iife ka use krte
//isse function turant invoke hojata
/*(function() {
    // Your code here
})();*/
/*  with arrow functions:
js
Copy
Edit
(() => {
    // Your code here
})();*/
/*  IIFE with Parameters
js
Copy
Edit
(function(name) {
    console.log("Hello " + name);
})("Tanmay");  // ✅ Output: Hello Tanmay*/