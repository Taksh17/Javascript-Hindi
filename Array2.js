const myarr=[1,2,3,4]
const myarr2=[6,7,8,9]
const merge=myarr.concat(myarr2)
console.log(merge);
//concat ek new array bnata usme sare elements ko add krta hai
//isme new array banta or har element ka apna index hota h
const pusarr=myarr.push(myarr2)
console.log(pusarr);
//push jo hai woh existing array me hin values ko add krdeta hai
//isme existing array ka last me ek new index ata jaha par array ko push krte or uss index ka use krke phir pushed array ka index lga ke value access krte
//Par in dono se better option hai spread operator
const newarr=[...myarr, ...myarr2]//Spread operator
console.log(newarr);
//yeh bhi same work krta jaise concat kaam krta values ko todd todd ke ek new array me daal deta
//The .flat() method flattens nested arrays into a single-level array.
//Yeh bhi same kaam krta jo concat ya spread krta hai
const narr=[1,2,3,[4,5],6,[7,8,9,[10,11,12],13,14],15,16]
const narrn=narr.flat(Infinity)
//iss syntax me apne ko depth dena padta to usko infinity set krdo haar baar
console.log(narrn);
//to check if it is an array or not
console.log(Array.isArray("Taksh"));
//to convert not an array into array
console.log(Array.from("Taksh"));
//Name is a plain object, not iterable and not array-like
//isme error aajega
console.log(Array.from({name:"Taksh"}));
//isko solve krne ke lie uss key ka value access kro uska array bnao
//Syntax:-console.log(Object.values(obj)) //isse uss key ka value access kro
//Agar set of elements dia hua rhe tab
console.log(Array.of(//name of all set of variables));








