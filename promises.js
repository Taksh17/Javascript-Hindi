/* A Promise in JavaScript is just like a real-life promise.
You promise your friend that you’ll bring him a pen tomorrow.
Until tomorrow comes, the promise is pending.
If you bring the pen, the promise is fulfilled.
If you forget or lose the pen, the promise is rejected.*/
const promise1=new Promise(function(resolve,rejected){
    setTimeout(function(){
        console.log("the task is completed");
        resolve()
        
    },1000)
})
//yeh pura creation of promise tha
//yeh hai basic syntax of promise
//abb jab hmko promise consume krna hoga tab:-
promise1.then(function(){
    console.log("promise consumed");
    
})
/*
new Promise(...) → You are creating a promise object.
The function (resolve, rejected) is called the executor function.
resolve → function you call when the task is successful.
rejected (usually named reject) → function you call if something goes wrong.
👉 At this point, promise1 is in the pending state.
setTimeout runs after 1 second (1000 ms).
After 1 second:
"the task is completed" gets printed.
resolve() is called → this changes the state of the promise from pending → fulfilled.
.then() is used to run code when the promise is fulfilled.
Since you called resolve() after 1 second, the .then() callback runs.
So it prints "promise consumed".
*/
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async tash is here");
        resolve()
    })
}).then(function(){
    console.log("hurra");
    //iss example me hmlog koi bhi data pass nhi kr rhen thien then me
    
})
//now passing the values from promise to then:-
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        //yha hmlog resolve me value pass krenge in form of object
        resolve({username:"tony",email:"tonykumar73#gmali.com"})

    },1000)
})
//yaha hmlog ko then ke andar me agar database se data lete or usko pass krna hua to:-
promise3.then(function(user){
    console.log(user);
})
//yaha user sirf ek refrence hai jiska koi kaha imp nhi hai iske jagha kuch bhi use hosakta and resolve me jo
//value pass hoga wahi then output me dega
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"gopal",password:"1234"})
        }else{
            reject("something went wrong")
        }

    },1000)
})
promise4.then(function(data){
    console.log(data);
    return data.password
}).catch(function(error){
    console.log(error);
    //yeh catch wala function tab kaam krega jab resolve ke andar nhi gya code to reject handle krega usko
}).then(function(password){
    console.log(password);
    
})//yeh wala then jo hai woh basically previous then se jo data hai usko extract krne ke kaam aega
//mtlv resolve ke andar se data nikalne ke kaam aega
//isko chaining bolte hai hmlog
.finally(function(){
    console.log("the promise is finally accepted or rejected");
    
})
/*
.finally() always runs, success or error.

.finally() does not get the result or error value — it’s only for cleanup.

The chain continues after .finally().

✅ In short:
Use .finally() when you want to do something regardless of success or failure
 (like hiding a loading spinner, closing a file, stopping a timer).
*/
const promise5=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"jaybheem",password:"1234"})
        }else{
            reject("something went wrong")
        }

    },1000)

})
//there is one more way to accept promises:-
async function consumepromise5() {
    const respnse=await promise5
    console.log(respnse);
    
}
/*
async keyword
Declares a function that always returns a Promise.
Inside an async function, you can use await
await keyword
await promise5 means:
👉 “Pause execution until promise5 is settled (resolved or rejected).”
If promise5 resolves → respnse gets the resolved value.
If promise5 rejects → an error is thrown (you’d need try/catch to handle it)
*/
/* fetch() is a built-in browser API for making HTTP requests.
When you call fetch(url), it returns a Promise.
This promise will resolve when the request succeeds (even if the HTTP status is 404 or 500).
It will reject only if there is a network error.
Because fetch() returns a Promise, you can use all Promise methods with it:
.then() → handle the response
.catch() → handle errors
.finally() → run code after the request is complete*/
