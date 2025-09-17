const accountId=1234
let accountmail="takshkumar73@gmail.com"
var accountpass="62621761"
accountcity="mumbai"
//accountId=2//not allowed//const ka value change nhi hosakta kyonki woh fixed h
console.log(accountId); 
accountmail="jhantu23@gmail.com"//let hai to iska value change hosakta or best practice h
console.log(accountmail)
accountpass="58291"//var ka value bhi change hojata par isme block scope or function scope ka lafda hai bhut to isko use krna mna hai
//var jo hai woh pure global scope me kaam krta hai
console.log(accountpass);
accountcity="delhi"//yeh to worst practice hai though js aise variable bnana allow krta hai
console.log(accountcity);
console.table([accountId,accountmail,accountpass,accountcity])
//agar variable ko value na do to undefined rehta hai value null nhi


