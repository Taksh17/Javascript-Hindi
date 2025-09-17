let mydate=new Date()
//date is a kind of object
console.log(mydate.toString());
//Sun Jul 20 2025 01:50:26 GMT+0530 (India Standard Time) yeh dega as output
console.log(mydate.toDateString());
//Sun Jul 20 2025 no time only date
console.log(mydate.toISOString());
//date ko iso 8601 server me convert krta hai
console.log(mydate.toLocaleString());
//20/7/2025, 1:53:59 am
// month ka index zero se start hota hai js me
let createdate=new Date(2027,6,15)
console.log(createdate.toDateString());
//interview question
let timestamp=Date.now()
//yeh time dega milisecond me
console.log(timestamp);
//Conversion of time into seconds
console.log(Math.floor(timestamp/1000));






