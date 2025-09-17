const myuser={
    username: "hitesh",
    age:55,
    welcome: function(){
        //this function jo hota hai woh current context ko refer krta hai
        console.log(`${myuser.username} welcome to the website`);
        
    }
}
const myuser2={
    username:"tanmay",
    welcome: myuser.welcome 
    }
myuser2.welcome()
myuser.welcome()
//this keyword basicaly current context ko specifiy krta hai jaha woh lagega uske current context ko specipy krdega

myuser.username="tony"
myuser.welcome()
//this can only be used with objects not with functions why??
//Arrow function
//creation of arrow function
const chai =() => {
    let username="talka sing"
    console.log(this.username);
}
chai ()
const chai2= function(){
    let usertwo="chaman"
    console.log(this.usertwo);
    
}
chai2()
//arrow function  2 tarha se declare hota hai
const function1=(num1,num2)=> {
    return num1+num2
}
console.log(function1(4,5));
//jab curly braces dalenge to return keyword likhna padega
const function4=(num1,num2)=>(num1+num2)//isko implicit return bolte hai
console.log(function4(6,5));
//aise me return nhi kregne hmlog





