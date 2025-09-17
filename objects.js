//Jab object ko literals ke tarha declare krte hai to singelton nhi banta hai
//singelton means apne tarah ka eklota object
//constructors se bnaoge object to singelton banega
//object creation syntax:-
//Literal method:-
const myuser={
    //Key  // Value
    name:"taksh",
    "full name": "tony bhaiya",
    age : 18,
    email :"takshkumar73@gmaial.com",
}
//aise access krskte hai hmlog object values ko
console.log(myuser.email);
//yaha full name ke bich special symbol aagya to woh dot notation se access nhi hoskta
//or jaha jaha yeh fail krega :-
//Property name has spaces
//Property name has special characters (like -, @, #, etc.)
//Property name starts with a number
/*Accessing a property dynamically (via a variable)
javascript
Copy
Edit
const key = "email";
const obj = {
  email: "taksh@example.com"
};

console.log(obj.key);       // ❌ Looks for property literally named "key"
console.log(obj[key]);      // ✅ Looks for "email"*/
//Property name is a reserved keyword (rare but possible in some cases)
//aise object ke value ko access krna best practice hai
console.log(myuser["full name"]);
//agar object ka values ko change krna hai to
myuser.email="tonyshark45@gmail.com"
console.log(myuser["email"]);
//value ko freeze bhi krskte ho
//yeh nested object ke lie kaam nhi krta par given single object ke sare values ko unchangble bna deta hai
Object.freeze(myuser)
myuser.email="suddokidng56@gmail.com"
console.log(myuser["email"]);




