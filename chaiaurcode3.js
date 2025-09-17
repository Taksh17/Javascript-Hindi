const clock=document.querySelector('#clock');
setInterval(function() {
let date=new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString()
},1000)
/* new Date() creates a JavaScript Date object with the current date & time.

.toLocaleTimeString() converts that date object into a human-readable string showing only the time (hours, minutes, seconds), formatted according to your system’s locale (e.g., 12-hour vs 24-hour, AM/PM, etc.).

console.log(...) prints that time string into the browser’s console every second.*/

