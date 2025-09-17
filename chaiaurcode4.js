const val=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessfield')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastresult')
const loworhigh=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevguess=[]
let numberofguess= 1
let playgame=true
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateguess(guess)
    })
   /*What e stands for
e is just a variable name (short for event).
When you attach an event listener, JavaScript automatically passes an event object to your callback function.
So here:
e represents the click event object.
This object contains all details about the event, like:
Which element was clicked Mouse position Keyboard keys pressed (if any)
Default browser behavior
And much more
🔹 Why e.preventDefault()?
Many elements (like a <form> or <button type="submit">) have default behaviors.
For example: clicking a submit button inside a form will reload the page by default.
e.preventDefault() stops that default behavior from happening.*/
}
function validateguess(guess){
    //yeh check krega ki valid number dia hai ya nhi user ne
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess<1){
        alert("Please enter  a valid number")
    }
    else if(guess>100){
        alert("Please enter  a valid number")
    }
    else{
        prevguess.push(guess)
    }
    if(numberofguess===11){
        displayguess(guess)
        displaymessage(`game over.random number was ${randomNumber}`)
        endgame()
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
}
function checkguess(guess){
    //yeh check krega ki value low hai ya high hai correct hai ya nhi
    if(guess===randomNumber){
        displaymessage("you guseed it right")
        endgame()
    }
    else if(guess<randomNumber){
        displaymessage("the number is too low")
    }
     else if(guess>randomNumber){
        displaymessage("the number is too high")
    }

}
function displayguess(guess){
//yeh bass guess form ko clean krega
 

}
function displaymessage(message){
    //isme dom manupulation hoga
}
function endgame(){
    
}
function newgame(){

}
